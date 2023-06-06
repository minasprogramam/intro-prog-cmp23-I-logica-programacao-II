// Queremos saber qual a condicao que precisa ser satisfeita para ir ao Arraiá do Minas Programam

// Se a passagem custar R$ 10,00 vamos ao Arraiá

// Se a passagem custar mais que R$ 10,00 nao vamos ao Arraiá

// Se a passagem custar R$ 10,00 mas estiver esgotada nao vamos ao Arraiá

let passagemEsgotada = false;
let passagem = 10.00;

if (passagem <= 10.00) {
    console.log('Vamos ao Arraiá');
} else if (passagemEsgotada == true) {
    console.log('Nao vamos ao Arraiá pois a passagem esgotou');
} else {
    console.log('Nao vamos ao Arraiá pois a passagem esta muito cara');
}

