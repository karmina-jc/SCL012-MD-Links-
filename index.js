const fs = require('fs');
const path = require('path');
const regExp = /\]\((http[^)]+)\)/g
const fetchUrl = require("fetch").fetchUrl;;

module.exports = {
  // Funcion para leer archivo
  throughFolder: (location) => {
    return new Promise ((resolve, reject) => {
      fs.readdir(location, (err, files) => {
        if (err) {
        reject(err)
        }else{
        resolve(files)       
        }
      })                   
    })
  },
  takeLinks: (docToRead) => {
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
  },
  urlStatus: (url) => {
    return new Promise ((resolve, reject) => {
     fetchUrl(url, (error, meta, body) => {
       if (error) {
         reject (error)
       } else {
         resolve (meta)
       }
      })
    })
  }

};

/*let selectFiles = []
          files.forEach(e => {
            if(path.extname(e) === '.md'){
              selectFiles.push(e)  
            }    
          })*/