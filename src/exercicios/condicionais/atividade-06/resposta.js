// Faça um programa que recebe um código de status de pedido (ex.:"PENDENTE", "EM_ANDAMENTO", "ENTREGUE") como entrada.

// Utilize switch case para verificar o código de status e imprimir a mensagem correspondente (ex.: "Seu pedido está pendente de pagamento", "Seu pedido está em andamento", "Seu pedido foi entregue").

// Caso o pedido não esteja em nenhum dos status acima, imprima a mensagem "Status inválido ou pedido nao computado".

let statusDePedido = "PENDENTE";

switch(statusDePedido) {
    case "PENDENTE":
        console.log(`Seu pedido está pendente de pagamento`)
        break;
    case "EM_ANDAMENTO":
        console.log(`Seu pedido está em andamento`)
        break;
    case "ENTREGUE":
        console.log(`Seu pedido foi entregue`)
        break;
    default:
        console.log(`Status inválido ou pedido nao computado`)
}

if (statusDePedido == "PENDENTE") {
    console.log(`Seu pedido está pendente de pagamento`)
} else if (statusDePedido == "EM_ANDAMENTO") {
    console.log(`Seu pedido está em andamento`)
} else if (statusDePedido == "ENTREGUE") {
    console.log(`Seu pedido foi entregue`)
} else {
    console.log(`Status inválido ou pedido nao computado`)
}