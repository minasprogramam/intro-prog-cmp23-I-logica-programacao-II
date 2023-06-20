let nota1 = (5.7)
let nota2 = (6.0)
let nota3 = (8.8)
let nota4 = (4.5)

let somaDasNotas = nota1 + nota2 + nota3 + nota4;
let media = somaDasNotas / 4


if (media > 7.0) {
    console.log("Sua média é", media + ". APROVADO");

  } else if (media < 5.0) {
    console.log("Sua média é", media + ". REPROVADO");

  } else {
    console.log("Sua média é", media + ". Bora de recuperação?");
  }