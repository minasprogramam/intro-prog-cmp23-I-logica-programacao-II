const valor = true;

let tipoDado;

switch (typeof valor) {
  case "number":
    tipoDado = "number";
    break;
  case "string":
    tipoDado = "string";
    break;
  case "boolean":
    tipoDado = "boolean";
    break;
  case "object":
    tipoDado = "object";
    break;
  case "function":
    tipoDado = "function";
    break;
  default:
    tipoDado = "Tipo de dado não reconhecido";
}

console.log(tipoDado);
