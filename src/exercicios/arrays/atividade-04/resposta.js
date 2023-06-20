let jogadoras = ["ana", "maria", "kiara", "paula", "daniela", "deise", "ursula", "layla"]


if (jogadoras.length % 2 === 0) {
let metade = jogadoras.length / 2;
let equipe1 = jogadoras.slice(0, metade);
let equipe2 = jogadoras.slice(metade);

console.log("equipe 1:", equipe1);

console.log("Equipe 2:", equipe2);

} else {
    console.log("numero de jogadoras invalido.");
}
    