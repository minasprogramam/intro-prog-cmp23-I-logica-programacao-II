// Criando o array listaDeConvidados com os nomes das pessoas convidadas
let listaDeConvidadas = ["Let", "Ana", "Pri"];

// Adicionando um novo convidado apenas se ele ainda não estiver na lista
let novaConvidada = "Carol";
// Utiliza o método includes para verificar se o nome já está na lista
if (!listaDeConvidadas.includes(novaConvidada)) {
  listaDeConvidadas.push(novaConvidada);
}

// Imprimindo a lista resultante
console.log(listaDeConvidadas);