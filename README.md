# Markdown Links - mdLinks

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, entre otros), por lo que es muy común encontrar archivos en ese formato en diferentes tipos de repositorio (empezando por el tradicional README.md). Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

mdLinks permite el usuario recorrer la carpeta en busca de archivos de extencion .md (archivos markdown) y comprobar el estado de los enlaces presentes en cada archivo verificando si estos se encuentran OK (status 200) o Broken (status !==200). el resultado se presenta en la terminal (o consola).

## Instalación
Para instalar mdLinks, en tu terminal dentro de la carpeta de los archivos a revisar:

`$ npm install karmina-jc/md-links --save`

## Para hacer uso de la libreria:

### Import mdLinks
`import { mdLinks } from 'mdLinks';`
 
### Require mdLinks

`const mdLinks = require ('mdLinks');`

Una vez la libreria se encuentre importada (import) o requerida (require), podras usar sus componentes.

`const mdLinks = require ('mdLinks');`

`console.log(mdlinks)`

### Herramientas:
* Node.js
* JavaScript

### Dependecias:
* fetch: ^1.1.0 
* eslint: ^6.8.0
* jest: ^25.1.0

### License
ISC

### Autora:
KarJC

### Keywords
markdown, .md, liks, fetch, url