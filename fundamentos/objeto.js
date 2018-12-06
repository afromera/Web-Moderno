const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 1230.50
prod1['Desconto Legal'] = 200

console.log(typeof prod1)
console.log(prod1)

// isso não é JSON 
// é um objeto com sua notação literal
const prod2 = {
    nome: 'Camisa Polo',
    preco: 50.90,
    obj: {
        blabla: 1,
        obj: {
            qqcoisa: 'qualquer texto'
        }
    }
}

console.log(prod2)

// Isso é um JSON - Javascript Object Notation
'{ "nome": "Blusa", "preco": 10.00 }'