// Num parque de diversões existe uma **Montanha Russa Muito Assustadora**. 
//Por isso, nesta montanha russa não são permitidas pessoas:

// * Menores de 12 anos
// * Maiores de 65 anos
// * Que possuam qualquer patologia cardíaca
// * Menores de 150cm de altura

// Para as pessoas que podem brincar na montanha russa, a tabela de preços é a seguinte:

// * 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
// * 20 reias, caso contrário

// Se papel é imprimir na tela:

// * **ACESSO NEGADO** caso a pessoa não possa brincar
// * **10 reais** caso esse seja o valor que a pessoa deve pagar para brincar
// * **20 reais** caso esse seja o valor que a pessoa deve pagar para brincar
let idade = 19
let altura = 1.59
let patologia = false
let estudante = true
if(idade > 65 || idade < 12 || altura < 150 || patologia == true){
    console.log(`acesso negado, aaaaaaaaaaaaaaaaaaaaaaaa`)
} 
else if(idade < 18 || estudante == true){
    console.log(`10 reais`)
}
else{
    console.log(`20 reais`)
}