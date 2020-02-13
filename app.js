const fs = require('fs');
const path = require('path');

const indexJS = require('./index.js');

//process.argv[2]

/* let comand = process.argv[2]
(comand)=>{
    if (comand === '--validate' && comand === '--stats'){
        Total: 3
        Unique: 3
        Broken: 1
    }else if(comand === '--validate'){
        aqui se muestra:
        ./some/example.md http://algo.com/2/3/ ok 200 Link a algo
        ./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
        ./some/example.md http://google.com/ ok 301 Google
    }else if(comand === '--stats'){
        Total: 3
        Unique: 3
    }
}*/

//Recorrer carpeta de archivo
const throughFolder = (location) => {
    return new Promise ((resolve, reject) => {
        fs.readdir(location, (err, archivos) => {
            if (err) {
             reject(err);
            }else{
             resolve (console.log(archivos))
               }
            })                   
    });
};

throughFolder(path.resolve())


//Lee archivo
const regExp = /\]\(([^)]+)\)/g
const readFile = (docMd) => {
    return new Promise((resolve, reject) => {
        fs.readFile(docMd, 'utf-8', (err, data) => {
    if (err){
        reject(err)
    }else{
        resolve(data.toString())
    }

    })
});
}

readFile();

//encontrar links dentro de archivo 'linksprueba.md'

const takeLinks = (docToRead) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(docToRead, (err, data) => {
        if (err){
        reject(err)
        }else{
        resolve(data.toString().match(regExp))
        }
    })
  })
}


takeLinks('./linksprueba.md')
