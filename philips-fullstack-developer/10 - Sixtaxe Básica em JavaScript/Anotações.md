# Sintaxe Básica em JavaScript

## O que danado é JavaScript?

Linguagem de programação de alto nível, próxima a linguagem humana

### Como Surgiu?

Criada em 19995, Brandan Eich. Diferente do Java.

### Praque serve?

**html** Estrutura
**CSS** Design
**JavaScript** Parte Interativa

### Onde usar?

Desenvolvimento de aplicativos e páginas web

## Entendendo variáveis e seus valores

### Como Funciona a Tipagem do JavaScript

#### Tipagem

- Regra do uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo
- JavaScript possui a tipagem FRACA, declaração acontece de modo dinâmico

#### Tipos Primitivos

## Vetores e Objetos

**Vetores e Arrays**

São um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice.
Os valores podem ser de vários tipos.

declarado entre colchetes
zero é o primento indice
são separados por vírgula

let array = [1, 'maÇa', 2. 3];

**Manipulando Arrays**

- forEach() - itera um array
- push() - add item no final do array
- pop() - remove item no final do array
- shift() - remove item no inicio do array
- unshift() - add item no início do array
- indexOf - retorna o índice de um valor
- splice() - remove ou substitui um item pelo índice
- slice() - retorna uma parte de um array existente

**Objetos**

Dados que possuem propriedades e valores que definem suas caracteristicas.

Deve ser declarado entre chaves {}

ex:

var xicara {
cor = 'azul';
tamanho = 'p'
funcao: tomarCafe();
}

As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. chamamos isso de desestruturação

## Estruturas Condicionais

### Estruturas Condicionais

São instruções para realizar determinada tarefa, dada alguma condição

**IF (se)**

if (condição) {

}

**Else (senão)**

if (condição) {

} else {

}

**if Ternário**

if[condição] ? [instrução 1] : [intrução 2]

\*\*Switch/Casa

switch(expressão){
case condição :
Execução
break;

    case condição :
    Execução
    break;

    default:
    execução

}

### Estruturas de Repetição

**FOR** Funciona ate que algo seja falso

**While** Eanquanto talcondição for verdadeira executa

**do-while** enquanto for verdadeiro execute, sendo que executa pelo menos uma vez a instrução

## Funções e suas Particularidades

Funções são blocos de comandos e instruções para a execução de determinadas tarefas

Ex

function nomeDaFuncao() {
instrução;
}

nomeDaFuncao();

Parametros: Variáveis que a função recebe e utiliza .

## Aprofundando Funções

### Funções Declarativas

Funções de uso mais comum, deve ser declarada usando a palavra reservada "function" seguida do "nome da função", parênteses "()" e chaves "{}"

Ex: function nomeDaFuncao(){
Instrução;
}

**Nome da função é obrigatório**

### Expressões de Funções

São funções atribuídas à expressões. A nomeação das funções por expressão é opcional.

EX var soma = function soma(){
intrução;
}

    var soma = function(){
        intrução;
    }

### Arrow Function

Funções de expressão de sintaxe curta.
Sempre são anônimas e não podem ser nomeadas.
Não utiliza a palavra reservada function

Ex; var função = () => {
instrução
}

