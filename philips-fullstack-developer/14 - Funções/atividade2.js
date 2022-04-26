function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } de idade`;
}

const pessoa = {
  nome: "Marcos",
  idade: 40,
};

const pessoa2 = {
  nome: "Eloá",
  idade: 13,
};

console.log(calculaIdade.call(pessoa, 20));

console.log(calculaIdade.apply(pessoa2, [40]));
