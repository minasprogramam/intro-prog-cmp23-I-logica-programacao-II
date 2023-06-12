// ### Par ou ímpar

// Duas pessoas estão jogando par ou ímpar. Você deve imprimir "par" caso a vencedora seja a
// pessoa que escolheu par e "ímpar" caso a vencedora seja a pessoa que escolheu ímpar.
// const jogada1 = 5;
// const jogada2 = 3;

let jogador1bom = 5
let jogador2ruim = 6
let soma = (jogador1bom + jogador2ruim)
if (soma % 2 == 0 ){
    console.log(`par`)
}
else {
    console.log(`impar`)
}