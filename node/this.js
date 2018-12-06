// fora de uma função no módulo this aponta para module.exports
console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

// dentro da função "this" aponta para global
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === module.exports)
    console.log(this === exports)
    console.log(this === global)
}

logThis()