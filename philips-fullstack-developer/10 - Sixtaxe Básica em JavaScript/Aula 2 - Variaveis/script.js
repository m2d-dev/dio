// ! Tipos Primitivos

//boolean

var wolf = false;
console.log(typeof wolf);

//number
var numero = 1;
console.log(typeof numero);

// String

var nome = "Marcos";
console.log(typeof nome);

// ! Como Declarar

// Delcaração mais comum
var variavel;
console.log(typeof variavel);
variavel = "Marcos";
console.log(typeof variavel);

let variavel2;
console.log(typeof variavel2);
variavel2 = 2;
console.log(typeof variavel2);

// Valor é inalterado, constante
const variavel3 = 12;

console.log(typeof variavel3);

// ! Definição de Escopo Global e Local

// Global: Acessado por todo o arquivo

//Local: Acessada apenas no bloco onde foi criada

var escopoglobal = "global";
console.log(escopoglobal);

function escopoLocal() {
  let escopolocalinterno = "interno";
  console.log(escopolocalinterno);
}

escopoLocal();

// ! Atribuição

var nome = "marcos";

// Comparação ==

var comparacao = "0" == 0;
console.log(comparacao);

// comparação Identica

var identica = "0" === 0;
console.log(identica);

// ! Operadores aritméticos

// adição

var adicao = 1 + 1;
console.log(adicao);

// Subtração

var subtracao = 2 - 1;
console.log(subtracao);

// Multiplicação

var multiplicacao = 2 * 2;
console.log(multiplicacao);

// Divisão

var divisao = 4 / 2;
console.log(divisao);

// Resto da Divisão

var resto = 5 % 2;
console.log(resto);

// Potenciação

var potenciacao = 2 ** 10;
console.log(potenciacao);

// ! Operadores Relacionais

//Maior que

var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor Que

var menorQue = 5 < 2;
console.log(menorQue);

// Maior, ou igual

var maiorIgual = 5 >= 5;
console.log(maiorIgual);

// menor, ou igual

var menorIgual = 5 <= 10;
console.log(menorIgual);

// ! Operadores Lógicos

// && E- Considera que todos os valores são verdadeiros

var e = true && false;
console.log(e);

// || OU - Considera que um dos valores é verdadeiro

var ou = true || false;
console.log(ou);

// ! Não - Inverte o valor de true para false e vice-versa

var nao = !true;
console.log(nao);
