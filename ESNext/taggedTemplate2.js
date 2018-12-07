function real(partes, ...valores){
    resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })

    return resultado.join('')
}

const preco = 28.9
const precoParcelado = 11

console.log(real `1x ${preco} ou 3x ${precoParcelado}`)