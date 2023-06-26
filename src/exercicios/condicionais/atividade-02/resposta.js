// Solicitando as notas ao usuário
let notaUm = 2.0;
let notaDois = 8.0;
let notaTres = 8.9;
let notaQuatro = 6.5;

// Calculando a média aritmética
let somaDasNotas = notaUm + notaDois + notaTres + notaQuatro;
let media = (somaDasNotas / 4).toFixed(2);

// Exibindo a média com duas casas decimais
console.log(`Sua média é + ${media}`);

// Verificando a situação do aluno e exibindo a mensagem correspondente
if (media > 7.0) {
  console.log("APROVADO");
} else if (media < 5.0) {
  console.log("REPROVADO");
} else {
  console.log("Bora de recuperação?");
}