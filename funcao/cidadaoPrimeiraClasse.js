//Função em JS é First-Class Object (Citizens)
//Hider-order function

// criar uma função de forma literal 
function func1(){}

// armazenar em uma variavel
const func2 = function(){}

// armazenar em um array
const array = [function(a,b){return a + b}, func1, func2]
console.log(array[0](2,3))

// armazenar dentro de atributos de um objeto
const obj = {}
obj.falar = function(){ return 'Opa' }
console.log(obj.falar())

// Passar uma função como parâmetro
function run(fun){
    fun()
}

run(function(){ console.log('Executando.....')})

// Uma função pode retornar/conter outra função
function soma(a, b) {
    return function (c) {
        return console.log(a + b + c)
    }
}
soma(1, 2)(3)
const cincoMais = soma(2, 3)
cincoMais(3)