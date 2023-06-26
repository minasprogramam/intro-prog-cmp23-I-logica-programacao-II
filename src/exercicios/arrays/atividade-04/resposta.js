// Criando o array de jogadoras
let jogadoras = ["Bia", "Ju", "Carol", "Duda", "Pri", "Let", "Gabi", "Heloisa"];

// Verificando se o número de jogadoras é par
if (jogadoras.length % 2 === 0) {
  // Dividindo as jogadoras em duas equipes iguais
  let equipe1 = jogadoras.slice(0, jogadoras.length / 2);
  let equipe2 = jogadoras.slice(jogadoras.length / 2);

  // Imprimindo as duas equipes no console
  console.log("Equipe 1:", equipe1);
  console.log("Equipe 2:", equipe2);
} else {
  // Imprimindo mensagem de número de jogadoras inválido
  console.log("Número de jogadoras inválido");
}
