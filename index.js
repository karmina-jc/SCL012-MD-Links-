const fs = require('fs');
const path = require('path');
const regExp = /\]\((http[^)]+)\)/g
const fetch = require('node-fetch')


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
}

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
}

module.exports = {
  mdLinks: (location) => {
    return new Promise((resolve, reject) => {
      if(path.extname(location) === '.md'){
        takeLinks(location)
        .then (links => {
          let checkedLinks = []
          links.map(url => {
            fetch(url)
            .then(res => {
              checkedLinks.push(location, url.split(0, 51), res.status)
            })              
            })                     
            resolve(checkedLinks)
          })
      }else{
        reject('Ingresa ruta de archivo Markdown')
      }
    })  
  }
};

mdLinks('./linksprueba.md')

const comand = process.argv[2]