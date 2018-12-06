console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])

//instancia de Array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//forma literal 
aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

//adicionando paulo no indice 3 e adicionando outro elemento usando push
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

//adicionando elemento no indice 9 o resto antes dele fica undefined
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

//colocando em ordem
aprovados.sort()
console.log(aprovados)

//Removendo elemento
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//remove 1 elemento a partir do indece 1 e adicionar mais 2 elementos a parti do mesmo indice
aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,1,'Elemento1','Elemento2')
console.log(aprovados)
