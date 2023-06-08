let notaUm = 8.5;
let notaDois = 10.0;
let notaTres = 8.0;
let notaQuatro = 9.0;

mediaNotas = (notaUm + notaDois + notaTres + notaQuatro)/4

if (mediaNotas > 7) {
    console.log(`Sua média é ${mediaNotas.toFixed(2)}. APROVADO!`)
} else if (mediaNotas < 5) {
    console.log(`Sua média é ${mediaNotas.toFixed(2)}. REPROVADO!`)
} else if (mediaNotas >= 5 && mediaNotas <= 7) {
    console.log(`Sua média é ${mediaNotas.toFixed(2)}. Bora de recuperação?`)
}