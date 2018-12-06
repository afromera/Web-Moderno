//nao vai funcionar no linux por que o correto é moduloA (com A maiusculo)
// entao o ideal é usar o padrao camalCase
const moduloA = require('../../moduloa')
const moduloB = require('/Users/af_romera/Desktop/exercicios-js/node/moduloB.js')

console.log(moduloA.ateLogo)
console.log(moduloB)

const modSaudacao = require('saudacao') 
console.log(modSaudacao.olaMundo)

// usando modulo core do note
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)

