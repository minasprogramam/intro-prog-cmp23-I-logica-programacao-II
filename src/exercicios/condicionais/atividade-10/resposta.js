const idadeNadador = ("15"); 

let categoria;

if (idadeNadador >= 5 && idadeNadador <= 7) {
  categoria = "Infantil A";
} else if (idadeNadador >= 8 && idadeNadador <= 11) {
  categoria = "Infantil B";
} else if (idadeNadador >= 12 && idadeNadador <= 13) {
  categoria = "Infantil C";
} else if (idadeNadador >= 14 && idadeNadador <= 17) {
  categoria = "Infantil D";
} else {
  categoria = "Sinto muito, mas você não pode competir!";
}

console.log("Categoria: " + categoria);
