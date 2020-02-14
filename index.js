const fs = require('fs');
const path = require('path');
const regExp = /\]\(([^)]+)\)/g
const fetchUrl = require("fetch").fetchUrl;;

module.exports = {
  // Funcion para leer archivo
  throughFolder: (location) => {
    return new Promise ((resolve, reject) => {
      fs.readdir(location, (err, archivos) => {
        if (err) {
        reject(err)
        }else{
        resolve (archivos)
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
        resolve(data.match(regExp))
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