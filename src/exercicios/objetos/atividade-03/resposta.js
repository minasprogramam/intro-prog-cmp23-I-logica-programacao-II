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

// imprimir uma mensagem amigavel que inclua chamar o cliente pelo nome e informar o valor que ele deve pagar
let totalAPagar = 0

for (let item of cartaoCliente.produtos) {
    totalAPagar = totalAPagar + (item.preco * item.quantidade)
}

console.log(`Oiiii ${cartaoCliente.nome}!! vc ta devendo: ${totalAPagar}`)