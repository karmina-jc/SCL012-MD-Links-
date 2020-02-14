const fs = require('fs');
const path = require('path');
const indexJS = require('./index.js');

const comand = process.argv[2]

const coreFunction = (comand) => {
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
.then(res => console.log(res))
.catch(err => console.log(err))

//encontrar links dentro de archivo 'linksprueba.md'

indexJS.takeLinks('./linksprueba.md')
.then(res => console.log(res))
.catch(err => console.log(err))

// //testeo de URL

indexJS.urlStatus ('http://www.google.com')
.then(res => console.log(res.status))
.catch(err => console.log(err))

