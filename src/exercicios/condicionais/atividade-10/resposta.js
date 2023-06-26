const idade = 10;
let categoria;

if (idade >= 5 && idade <= 7) {
  categoria = "Infantil A";
} else if (idade >= 8 && idade <= 11) {
  categoria = "Infantil B";
} else if (idade >= 12 && idade <= 13) {
  categoria = "Juvenil A";
} else if (idade >= 14 && idade <= 17) {
  categoria = "Juvenil B";
} else {
  categoria = "Você não pode competir!";
}

console.log(categoria);
