const diaDaSemana = 3;

let diaPorExtenso;

switch (diaDaSemana) {
  case 1:
    diaPorExtenso = "Segunda-feira";
    break;
  case 2:
    diaPorExtenso = "Terça-feira";
    break;
  case 3:
    diaPorExtenso = "Quarta-feira";
    break;
  case 4:
    diaPorExtenso = "Quinta-feira";
    break;
  case 5:
    diaPorExtenso = "Sexta-feira";
    break;
  case 6:
    diaPorExtenso = "Sábado";
    break;
  case 7:
    diaPorExtenso = "Domingo";
    break;
  default:
    diaPorExtenso = "Número inválido de dia da semana";
}

console.log(diaPorExtenso);
