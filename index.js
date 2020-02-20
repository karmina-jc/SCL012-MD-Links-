const fs = require('fs');
const path = require('path');
const regExp = /\]\((http[^)]+)\)/g
const fetchUrl = require("fetch").fetchUrl;


// promesa lee carpeta
const throughFolder = (location) => {
  return new Promise ((resolve, reject) => {
    fs.readdir(location, (err, files) => {
      if (err) {
      reject(err)
      }else{
      resolve(files)       
      }
    })                   
  })
};

// promesa que lee archivo y toma links
const takeLinks = (docToRead) => {
  return new Promise ((resolve, reject) => {
    fs.readFile(docToRead, 'utf8', (err, data) => {
      if (err){
      reject(err)
      }else{
        let cleanLinks = []
        const allLinks = data.match(regExp)
        allLinks.forEach(e => {
          cleanLinks.push(e.replace(/[\[\(\)\]]/g, ''))
        })
      resolve(cleanLinks)
      }        
    })
  })
};

const testLinks = (url) => {
  return new Promise ((resolve, reject) => {
    fetchUrl(url, (error, meta, body) => {
     if (error) {
       reject (error)
     } else {
       resolve (meta)
     }
    })
   })
};

const mdLinks = () => {
  throughFolder(path.resolve())
  .then(files => {
    for (let i = 0; i < files.length; i++) {
      if(path.extname(files[i]) === '.md') {
        takeLinks(files[i])
        .then(links => {
          links.map(url => {
            testLinks(url)
            .then(checkedLink => {
              if(checkedLink.status === 200){
                console.log(files[i], url.split(0, 51), ' OK ', checkedLink.status)
              }else{
                console.log(files[i], url.split(0, 51), ' Broken ', checkedLink.status)
              }
            })
          });
      })
    }        
  }
  })
  .catch(err => console.log(err))
}

module.exports.mdLinks = mdLinks()
