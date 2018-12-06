// Arrow Function  também chegou no ES6
// são sempre uma função anonima
// quando tem somente um parametro nao é obrigatorio colocar parenteses

//Arrow Function
const subtrair = (a, b) => a - b
console.log(subtrair(10,6))

//Arrow Function e this
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//Parametros Default
function logNome(nome = 'Alex'){
    console.log(nome)
}

logNome()
logNome('João')

//Operador Rest
function total(...numeros){
    let total = 0;
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,5,10))