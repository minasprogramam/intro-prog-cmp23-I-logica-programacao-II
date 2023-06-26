const letras = ["A", "e", "B", "C", "E", "z"];
let contador = 0;

// com o for eu consigo percorrer o array e verificar se cada elemento é igual a "E" ou "e"
for (let i = 0; i < letras.length; i++) {
  if (letras[i] === "E" || letras[i] === "e") {
    contador++;
  }
}

// depois do loop eu verifico se o contador é igual a 0, se for, imprimo uma mensagem, se não, imprimo outra
if (contador === 0) {
  console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
} else {
  console.log(`Foram encontradas ${contador} letras 'E' ou 'e'.`);
}
