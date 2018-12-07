// tagged template - processa o template dentro de uma funcao

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return `Outra String`
}

const nome = 'Alex'
const idade = 28

console.log(tag `${nome} tem ${idade} anos`)

