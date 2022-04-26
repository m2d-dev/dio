function alunosAprovados(alunos, media) {
  let aprovados = [];

  for (let i = 0; i < alunos.length; i++) {
    const { nota, nome } = alunos[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }

  return aprovados;
}

const alunos = [
  {
    nome: "João",
    nota: 5,
    turma: "1B",
  },
  {
    nome: "Sofia",
    nota: 9,
    turma: "1B",
  },

  {
    nome: "Paulo",
    nota: 3,
    turma: "2B",
  },
];

console.log(alunosAprovados(alunos, 5));
