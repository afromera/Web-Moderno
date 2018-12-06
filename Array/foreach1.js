const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// utilizando uma funcao anonima, aqui consigo mostrar o indice
aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})

// usando arrow function (aqui eu nao tenho a necessidade de mostrar o indice)
aprovados.forEach(nome => console.log(nome))

// armazenando uma arrow function que obtém aprovado e mostra o valor dele
// depois percorre a lista de aprovados chamando a funcao exibir aprovados
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)