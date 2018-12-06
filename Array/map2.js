const carrinho = [
    '{ "nome" : "Borracha", "preco": 3.45 }',
    '{ "nome" : "Caderno", "preco": 13.90 }',
    '{ "nome" : "Kit de Lapis", "preco": 41.22 }',
    '{ "nome" : "Caneta", "preco": 7.50 }'
]

// retornar um array com apenas os precos
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const emDinheiro = preco => `R$ ${parseFloat(preco).toFixed(2).replace('.',',')}`

console.log(carrinho.map(paraObjeto).map(apenasPreco).map(emDinheiro))