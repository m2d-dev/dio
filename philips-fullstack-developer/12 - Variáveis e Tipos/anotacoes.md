# Variáveis e Tipos

## Atribuindo Valores

### Variáveis

**Case Type --> Exemplo**

- Camel Case --> someAwesomeVar
- Snake Case --> some_awesome_var
- Kebab Case --> some-awesome-var
- Pascal Case --> SomeAewsomeVar
- Upper Case Snake Case --> SOME_AWESOME_VAR

**VARIÁVEIS**: Valores dinâmicos. Padrão camelCase

**VAR**: Escopo global
**LET**: Escopo de Bloco
**CONST**: Escopo de Bloco

**OBS:** LET vai trazer mais segurança para o seu código

**Constantes** Escopo de Bloco, não faz Hoisting, padrão SNAKE_UPPER_CASE

## Tipos

### Estruturas de Dados

Javascript é uma linguagem de tipagem dinâmica e fraca. Ou seja antes de declarar um valor, você não precisa declarar um tipo.

**Tipos Primitivos**

- numbers
- strings
- boolean
- null
- undefined

**Composite / Tipos não-primitivos**

- objetos
- arrays

### Strings

Textos, frases

declarados entre aspas, ou crases (nesse caso podemos passar variáveis e outros itens)

### Number

Números, utilizados em todo tipo de operações.
**Atenção:** classe Math para operações matemáticas, contantes como PI e etc.

### Boolean

Valores de verdadeiro ou falso, oriundos de operações lógicas.

### Arrays

Arrays / Vetores: Listas iteráveis de elementos
Inicia-se em zero

### Objetos

let pessoa = {
name: 'Marcos',
idade: 20
}

### Empty, Null e Indefined

- Empty: Declarou a variável, mas sem um valor
- Null: Valor não foi inicializado, não existe
- Undefined: Nem mesmo declarou, valor não existe
