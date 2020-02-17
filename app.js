const fs = require('fs');
const path = require('path');
const indexJS = require('./index.js');

const comand = process.argv[2]

const comandFunction = (comand) => {
    if (comand === '--validate' && comand === '--stats'){
        /*Total: 3
        Unique: 3
        Broken: 1*/
    }else if(comand === '--validate'){
        /*aqui se muestra:
        ./some/example.md http://algo.com/2/3/ ok 200 Link a algo
        ./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
        ./some/example.md http://google.com/ ok 301 Google*/
    }else if(comand === '--stats'){
        /*Total: 3
        Unique: 3*/
    }
}

//Recorrer carpeta de archivo
indexJS.throughFolder(path.resolve())
.then(files => {
  for (let i = 0; i < files.length; i++) {
    if(path.extname(files[i]) === '.md') {
       indexJS.takeLinks(files[i])
      .then(links => {
        const linkToCheck = links
        return linkToCheck
      })
      .then (linkToCheck => {
          linkToCheck.forEach(e => {
              indexJS.urlStatus(e)
              .then(checkedLink => {
                console.log(e)
                console.log(checkedLink.status)   
              })
          });
      })
    }        
  }
})
.catch(err => console.log(err))

/*indexJS.takeLinks(docToRead)
.then(res => console.log(res))
.catch(err => console.log(err))

//testeo de URL

indexJS.urlStatus ('http://www.google.com')
.then(res => console.log(res))
.catch(err => console.log(err))
*/
