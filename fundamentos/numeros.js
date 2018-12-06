const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.05
const avaliacao2 = 7.86

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))

const testeNumero = 2.555
console.log(testeNumero.toFixed(2)) // toFixed arredonda para maior se o numero subsequente for igual a 5

console.log(typeof media)
console.log(typeof Number)