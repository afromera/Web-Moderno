const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const getMulheres = pessoa => pessoa.genero === 'F'
const getChineses  = pessoa => pessoa.pais === 'China'
const menorSalario = (func, funcA) => {
    return func.salario < funcA.salario ? func : funcA
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
                    .filter(getMulheres)
                    .filter(getChineses)
                    .reduce(menorSalario)
                    
    console.log(func)
})

