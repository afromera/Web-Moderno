const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
const enconding = 'utf-8'

//lendo o arquivo de forma sincrona...
const conteudo = fs.readFileSync(caminho, enconding)
console.log(conteudo)

//lendo o arquivo de forma assincrona
fs.readFile(caminho, enconding, (err,conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//lendo arquivo json usando require (nesse caso tem que informar a extensão .json)
const config = require('./arquivo.json')
console.log(config.db)

//leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da Pasta...')
    console.log(arquivos)
})