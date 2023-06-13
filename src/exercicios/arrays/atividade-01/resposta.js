// pop() - remove um item do fim do array 
// push() - adiciona um item ao fim do array 
// shift() - adiciona um item ao início do array 
// unshift() - remove um item do início do array 

//Crie um array com 5 nomes de cantoras.
let cantoras = ["Beyonce", "Iza", "Rihanna", "Anitta", "Liniker", "Ludmilla", "Talia", "Maria Bethania", "Maria Rita", "Maria Gadu"]


// Adicione uma cantora ao fim da lista e imprima a lista na tela
cantoras.push("Ludmilla")
console.log(cantoras)

// Remova uma cantora do fim da lista e imprima a lista na tela
cantoras.pop()
console.log(cantoras)

// Adicione uma cantora ao início da lista e imprima a lista na tela

cantoras.unshift("Talia")
console.log(cantoras)

// Removeu uma cantora do início da lista e imprima a lista na tela

cantoras.shift()
console.log(cantoras)

// Imprima a última cantora da lista na tela

console.log(cantoras[4])
console.log(cantoras[cantoras.length - 1])

// Imprima a segunda cantora da lista na tela
console.log(cantoras[1])

// Imprima a cantora de índice 2 na tela
console.log(cantoras[2])