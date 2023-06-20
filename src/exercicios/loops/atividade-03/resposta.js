const aluno = {
    nome: "keyla",
    idade: 20,
    curso: "Relacões Internacionais",
  };
  
  for (let propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade]}`);
  }
  