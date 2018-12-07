// ES8 Object.values e Object.entries

const obj = {a: 1, b: 2, c: 3}

console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notação Literal
const nome = 'alex'

const pessoa = {
    nome,
    idade: 28,
    ola(){
        return ' Oi Pessoal'
    }
}

console.log(`${pessoa.nome} disse: ${pessoa.ola()}`)

//classe
class Animal {
    peso(){
        return 30
    }
}
class Cachorro extends Animal {
    falar(){
        return 'au au au'
    }
}

const dog = new Cachorro()
console.log(dog.peso(),dog.falar())