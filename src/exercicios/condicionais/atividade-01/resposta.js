// ## Verificando valores

// Crie um programa que receba um valor numérico e analise se ele é maior ou igual a 20;
// Para números maiores que vinte, imprima no terminal a seguinte mensagem: "O número x é maior que 20";
// Para números menores que vinte, imprima no terminal a seguinte mensagem: "O número x é menor que 20";
// Para o número vinte, imprima no terminal a seguinte mensagem: "O número digitado é igual a 20".

// if (numero<20) {
//     console.log(`o numero ${numero} é menor que vinte oh maa ga`)
// } else if (numero>20) {
//     console.log(`abluebluwblue o numero ${numero} é maior que 20`)
// } else {
//     console.log(`abluebluebleue o numero é 20 sssssssss`)
// }

let valorPassagem = 10;

switch(true) {
    case (valorPassagem < 10):
        console.log(`economia ta top, bora viajar`)
        break;
    case (valorPassagem > 10):
        console.log(`ta caro, nao vamos viajar`)
        break;
    case (valorPassagem == 10):
        console.log(`ta ok, vamos viajar`)
        break;
}
