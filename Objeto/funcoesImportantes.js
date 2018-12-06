const pessoa = {
    nome: 'Receba',
    idade: 2,
    peso: 13
} 


console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1}
const a1 = {b: 2}
const a2 = {c: 3, a: 4}
const obj = Object.assign(dest, a1, a2)

Object.freeze(obj)
obj.a = 888
console.log(obj)