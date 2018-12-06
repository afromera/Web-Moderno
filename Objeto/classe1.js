class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome,
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 7500)
const contaLuz = new Lancamento('Conta de Luz', -250)

const contas = new CicloFinanceiro(11,2018)
contas.addLancamentos(salario,contaLuz)

console.log(contas.sumario())

