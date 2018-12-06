const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Remove do ultimo indice do array
pilotos.pop()
console.log(pilotos)

// Adicionna no ultimo indice
pilotos.push('Verstappen')
console.log(pilotos)

// Remove do primeiro indice do array
pilotos.shift()
console.log(pilotos)

// Adiciona no primeiro indice do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode adicionar e remover elementos

//adicionando
pilotos.splice(2,0,'Bottas', 'Massa') // a partir do indice 2, remove 0 e adicionar Bottas e Massa
console.log(pilotos)

//removendo
pilotos.splice(3,1) //a partir do indice 3 remove 1 registro
console.log(pilotos)

// cria um novo array a partir do indice indicado
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// cria um novo array a partir do indice 1 até o indice 3 ( antes de chegar no indice 4)
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)
