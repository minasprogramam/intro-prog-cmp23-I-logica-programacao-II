const pessoa = {
    nome: "Mayhhara",
    idade: 23,
    altura: 1.58,
    temCNH: true,
    apelidos: ["May", "Ma"]
  };

  // Imprimindo o objeto pessoa
  console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, `);
  
  // Verificando se a pessoa possui CNH e imprimindo a mensagem adequada
  if (pessoa.temCNH) {
    console.log("possui CNH");
  } else {
    console.log("não possui CNH");
  }
  
  // Imprimindo os apelidos da pessoa
  console.log("e gosta dos seguintes apelidos:");
  for (let apelido of pessoa.apelidos) {
    console.log(apelido);
  }