// Estruturas Condicionais

/*
var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1
  ? console.log("Os jogadores são validos")
  : console.log("Jogadores Inválidos");

//usando if / else if / else
if (jogador1 > 0) {
  console.log("Jogador 1 marcou ponto!");
  placar = jogador1 > jogador2;
} else if (jogador2 > 0) {
  console.log("Jogador 2 marcou ponto");
  placar = jogador2 > jogador1;
} else {
  console.log("Ninguém marcou ponto");
}

//switch/case

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log("Jogador 1 Ganhou");
    break;

  case (placar = jogador2 > jogador1):
    console.log("Jogador 2 Ganhou!");
    break;

  default:
    console.log("Ninguém ganhou!");
}

*/

// EStruturas de repetição

let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];

let objeto = {
  propriedade1: "valor1",
  propriedade2: "valor2",
  propriedade3: "valor3",
};

//for - Executa uma instrução até que ela seja falsa

for (let i = 0; i < array.length; i++) {
  console.log(i);
}

// for/in - Executa repetição a partir de uma propriedade

for (let i in array) {
  console.log(i);
}

//com object

for (i in objeto) {
  console.log(i);
}

// for/of - Executa a repetição a partir de valor

for (i of array) {
  console.log(i);
}

//com Object

for (i of objeto.propriedade1) {
  console.log(i);
}

// While - Executa enquanto a condição for verdadeira

var a = 0;

while (a < 10) {
  a++;
  console.log(a);
}

//do - while
var ba = 0;
do {
  ba++;
  console.log(ba);
} while (ba < 10);
