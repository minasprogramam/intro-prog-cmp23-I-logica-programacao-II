let idade = 20;
let altura = 160;
let patologiaCardiaca = false;
let estudante = false;

if (idade < 12 || idade > 65 || altura < 150 || patologiaCardiaca == true ){
    console.log("ACESSO NEGADO!")
} else if (estudante == true || idade < 18) {
    console.log("10 REAIS!")
} else {
    console.log("20 REAIS!")
}

// May, acho que você não chegar a usar o "ou" durante a aula, mas como eu não encontrei outra forma de fazer o código funcionar, pesquisei e consegui assim <3