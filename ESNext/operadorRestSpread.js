//operador ... rest(juntar)/spred(espalhar)
// usar rest como parâmetro de uma função

//Operador Rest
function total(...numeros){
    let total = 0;
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,5,10))

// Operador Spread com Objeto (espalha os atributos de pessoa dentro do funcionario)
const pessoa = { nome: 'Alex', idade: 28}
const funcionario = { salario: 3000, cargo: 'analista de sistemas', ...pessoa}
console.log(funcionario)

// Operador Spread com Array
const grupoA = ['Joao', 'Maria', 'Andre']
const grupoFinal = ['Pedro', ...grupoA]
console.log(grupoFinal)