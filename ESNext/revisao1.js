////templateString, destructuring, let e const são novidades da ES2015 ou ES6

//let tem escopo de bloco enquanto o var tem escopo global 
{
    var a = 10;
    let b = 20;
}

// encontra pois é escopo global 
console.log(a) 
// não encontra pois ele está dentro do bloco
//console.log(b) 


// Exemplo TemplateString
const produto = 'iPad'
const valor = 'R$ 4000,00'
console.log(`O ${produto} custa ${valor}`)

//Exemplos Destructuring
const [l,e, ...tras] = 'SoWebModerno'
console.log(l,e,tras)

const [x, , z] = [1, 2, 3]
console.log(x,z)

const { idade: i, nome } = {nome: 'Alex', idade: 28}
console.log(i,nome)