const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Prod', preco: 4199, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}    
]

const produtoCaro = p => p.preco >= 2000
const produtoFragil = p => p.fragil === true

const filtrado = produtos.filter(produtoCaro).filter(produtoFragil);
console.log(filtrado) 

// console.log(produtos.filter(function(p){
//     return p.fragil === true && p.preco > 2000
// }))

console.log(produtos.filter(function(p){
    return p.nome.toLowerCase().includes('copo')
}))

