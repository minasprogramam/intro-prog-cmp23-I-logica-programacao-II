const cartaoCliente = {
    nome: "Leticia Andrade",
    idade: 20,
    produtos: [
        {
            nomeProduto: "batata",
            preco: 500,
            quantidade: 5
        },
        {
            nomeProduto: "coxinha",
            preco: 200,
            quantidade: 2
        },
        {
            nomeProduto: "pudim",
            preco: 300,
            quantidade: 3
        },
    ]
}

// Imprima o nome do cliente
console.log(cartaoCliente.nome)
// Imprima a idade do cliente
console.log(cartaoCliente.idade)
// Modifique a idade do cliente e imprima a nova idade do cliente
cartaoCliente.idade = 23
console.log(cartaoCliente.idade)
// Imprima o nome do primeiro produto consumido
console.log(cartaoCliente.produtos[0].nomeProduto)
// Imprima o preço unitário do último produto consumido por ele
// console.log(cartaoCliente.produtos[2].preco)
console.log(cartaoCliente.produtos[cartaoCliente.produtos.length -1].preco)
