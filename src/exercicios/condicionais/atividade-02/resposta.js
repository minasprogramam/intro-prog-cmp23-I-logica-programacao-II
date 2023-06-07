// # Exercícios de classe 🌟

// ## Cálculo de média

// Crie um programa que calcule a média de quatro notas fornecidas pelo usuário. As notas podem variar de 0.0 a 10.0. O programa deverá calcular a média aritmética das quatro notas e exibir o resultado para o usuário da seguinte forma:
// - Se a média for maior que 7.0 imprima para o usuário: "Sua média é x. APROVADO"
// - Se a média for menor que 5.0 imprima para o usuário: "Sua média é x. REPROVADO"
// - Se a média for maior ou igual a 5.0 e menor ou igual a 7.0 imprima para o usuário: "Sua média é x. Bora de recuperação?"

let notaUm = 6.64
let notaDois = 8.12
let notaTres = 4.33
let notaQuatro = 7.93

let somaDasMinhasNotas = notaUm + notaDois + notaTres + notaQuatro

let resultadoDaMedia = (somaDasMinhasNotas/4).toFixed(1)

console.log(resultadoDaMedia)
