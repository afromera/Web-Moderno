const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

contadorA.inc()
contadorA.inc()

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorC.inc()
contadorC.inc()

console.log(contadorA.valor, contadorB.valor)
console.log(contadorC.valor, contadorD.valor)