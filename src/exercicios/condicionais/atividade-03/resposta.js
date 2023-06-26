// ### Par ou ímpar

// Duas pessoas estão jogando par ou ímpar. Você deve imprimir "par" caso a vencedora seja a
// pessoa que escolheu par e "ímpar" caso a vencedora seja a pessoa que escolheu ímpar.
// const jogada1 = 5;
// const jogada2 = 3;

let jogadorUm = 5
let jogadorDois = 6
let soma = (jogadorUm + jogadorDois)
if (soma % 2 == 0 ){
    console.log(`par`)
}
else {
    console.log(`impar`)
}