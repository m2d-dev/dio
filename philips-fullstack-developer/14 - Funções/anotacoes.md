# Funções

## Tipos de Função

### Estrutura

function nome(parametos) {
//instruções
}

**Variáveis criadas dentro da função, só podem ser utilizadas dentro dela (escopo)**

**Quando invocamos o "return", a função para de ser executada**

#### Função Anônima

Funções que representam expressões --> uma variável pode armazener uma função

const soma = function (a,b) { return a + b;}

#### Função Autoinvocavel

**IIFE(Immediately Invoked Function Expression)**

uma função anônima entre parenteses, seguida por outro par de parênteses, que representa sa chamada.
Pode ser utilizada como parametros
Pode ser armazenada em uma variável
(
function() {
let name = "DIO";
return nome;
)
}();

#### Callbacks

**Uma função passada como argumento para outra função** Utilizando callbacks, você tem maior controle da ordem de chamadas

## Parâmetros

### Valores padrão e Objeto "Arguments"

#### Valores Padrão

Suponha que queremos que a variável num, caso não seja passado um valor, tenha um valor padrão

**Pré-ES2015**

function expotenciacao(array, num){
if (num === undefined){
num = 1;

        //restante do código
    }

}

**Pós-ES2015**

function expotenciacao(array, num = 1){

        //restante do código
    }

#### Objeto "Arguments"

Um array com todos os parâmetros que foram passados quando a função foi invocada

utilizamos arguments.metodos

### Arrays e Objetos

#### Arrays

**Spread** uma forma de lidar separadamente com os elementos de um array. O que era parte de um array se torna um elemento independente

**EX:**

function sum(x, y, z) {
return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

**REST** Combina os argumentos em um array. O que era um elemento independente se torna parte de um array

**EX**
function confereTamanho(...args) {
console.log(args.length);
}

conferetamanho() // 0
conferetamanho(1, 2) // 2
conferetamanho(1, 2, 5) // 3

#### Objetos

**Object DEstructuring** Entre chaves, podemos filtrar apenas os dados que nos interessam em um objeto

## Loops

### If/Else

if (condição){
Declaração 1: Ocorre caso a condição seja verdadeira
} else {
declaração 2: ocorre caso a condição seja falsa
}

**Javascript não tem elseif, as palavras sempre estão espaçadas!**

### Switch

- Equivale a uma comparação de tipo e valor (===)
- Sempre precisa de um valor "default"
- Ideal para quando se precisa comparar muitos valores

EX:

switch (nome){
case 1:
return "Marcos";
break;
case 2:
return "Cássia";
break;
default:
return "Não são o casal"
}

### FOR

Loop dentro de elementos iteráveis, ou repetições controladas

for (indice, condição, incremento) {
instruções
}

EX: Imprimir de 0 - 10

for (let i = 0, i <= 10; i++){
console.log(i);
}

### For...in

Loop entre propriedades enumeráveis de um objeto. Percorre as propriedades do objeto

EX
const obj = {
nome: "Marcos",
idade: 40,
sexo: "M"
}

for (prop in obj) {
console.log(prop);
}

saída
//nome
//idade
//sexo

for (prop in obj) {
console.log(obj.prop);
ou
console.log(obj[prop]);
}

saída
//Marcos
//40
//M

### For ... Of

Loop de estruturas iteraveis (Arrays, strings)

EX

for (num of nums){
console.log(num);
}

let nuns = [1,3,5];

Saída
//1
//3
//5

### While

Executa instruções até que a instrução se torne falsa

let num = 0;
while (num < 10){
imprime(num)
mum++;
}

### do..While

Executa instruções até que a condição se torne falsa. Porém a primeira execução sempre ocorre.

## This

A palavra reservada this é uma referência de contexto. Seu valor pode mudar de acordo com o lugar no código onde fui chamada

**Contexto ---> Referência**

- Em um objeto(método) --> Próprio objeto dono do método
- Sozinha --> Objeto global (em navegadores, window)
- Função --> Objeto global
- Evento --> Elemento que recebeu o evento

## Arrow Functions

Sintaxe

const heloWord = () => {
return "Hello Word"
}

Funções pequenas não precisam das chaves

exemplo

const soma = (a, b) => a + b;

**IMPORTANTE**

- Arrow function Não faz Hoisting
- Sempre atribuida a constantes
- "this" sempre será o objeto global. Métodos para modificar seu valor não irão funcionar
- Não existe o objeto "arguments"
- O construtor também não pode ser utilizado
