# Orientação a Objetos

## Compreendendo Orientação a Objetos

### Paradigmas e Pilares

Os programas são "objetos" que possuem uma série de propriedades

**PILARES**

- Abstração
- Encapsulamento
- Herança
- Polimorfismo

#### Abstração

Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, a fim de simplificar a sua avaliação, classificação.

Complexo --> Abstração --> Simplififação

#### Herança

O objeto filho herda propriedades e métodos do objeto pai

Carro --> Herda características --> Veículo

#### Encapsulamento

Cada classe tem propriedades e métodos independentes do código

#### Polimorfismo

Objetos podem herdar a mesma classe pai, mas se comportam de forma diferente

## Orientação a Objetos em JavaScript

### Protótipos

Todos os objetos JavaScript herdam propriedades e métodos de um prototype.
O objeto Object.prototype está no topo desta cadeia

### Classes

Javascript não possui classes nativamente. Todas as classes são objetos e a herança se dá por protótipos.

**Syntatic sugar:** Uma sintaxe feita para facilitar a escrita

**Estrutura de uma classe**

- Construtor
- Getter e Setter
- Variáveis e Métodos

Propriedade super() é para utilizar propriedades do construtor da classe pai
Podemos sobrescrever métodos herdados e atribuir outros comportamentos.
