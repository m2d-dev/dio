# Posicionando elementos com Flexbox em CSS

## Introdução ao Curso

**Flexbox** Layouts responsivos, sem a necessidade de valores fixos

**Flex Container** Tag que envolve os itens, transforma todos os itens filhos em flex itens

**Propriedades Relacionadas:**

- display
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

**Flex Item** : Filhos diretos do Flex Container e tambem podem se tornar flex Container

**Propriedades Relacionadas**

- flex-grow
- flex-basis
- flex-shrink
- flex
- order
- align-self

## Fundamentos do Flexbox - P1

### 01 Estrutura Básica do display:flex

**Extensões**

- HTML Snippets
- Live HTML PReviewer

Tornar uma Tag um elemento do tipo flex conteiner, extende para seu filhos diretos automaticamente. Se tornam flex itens

### 02 Prática display:flex

**Adaptação dos itens seguindo ao seu conteúdo**

### 03 Estrutura básica do flex direction

Proprietade que estabelece o eixo principal do container, direcção que os itens são colocados )Vertical e Horizontal)

- Row --> Direção padrão (1,2, 3, 4)
- Row-Reverse --> Sentido oposto da direção do texto (4, 3, 2, 1)
- Column --> Ordenação de cima para baixo Vertical, coluna única de cima pra baixo. (1, 2, 3, 4)
- ColumReverse --> Ordenação de baixo pra cima(4, 3, 2, 1)

### 04 Prática flex direction

- Flex-direction: Row, row-reverse, column, column-reverse

#### 05 Prática flex direction

Define ou não a quebra de linha do nosso container
**Padrão:** Não quebra linha

**propriedades**
_ nowrap: Não permite quebra de linha e elementos vão vazar
_ wrap: permite quebra de linha, assim que os itens não puder mais ser compactado \* wrap-reverse: mesma lógica do wrap, mas ao contrário, como um enter e indo para linha de cima

#### 06 Estrutura básica e prática com flex flow

Atalho para as propriedades flex-direction e flex-wrap

**uso não é comum**

#### 07 Estrutura Básica Justify Content

Encarregada de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles

**OBS:** Caso seus itens esteja ocupando 100% de todo o container ela não se aplica

**Variações:**

- flex-start: início do container
- flex-end: final do container
- center: ao centro do container
- space-between: cria um espaçamento igual entre os elementos
- space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final

**OBS: Existem outras variações, mas essas são as principais Left, right, Normal**

#### 08 Align Items

Trata do alinhamento dos flex-itens de acordo com o eixo do container (row, column)

Alinhamento central no eixo vertical

Não precisa ter conhecimento da altura desses itens

**Tipos de Alinhamento**

- Center: Alinhamento dos itens ao centro
- Stretch:Padrão, e os flex itens cresçam igualmente
- flex-start: Alinhamento dos itens no início
- flex-end: Alinhamento dos itens no final
- Baseline: alinhamento de acordo com a linha base da tipografia dos itens

#### 09 Align Content

Responsável por tratas o alinhamento das linhas do container em relação ao eixo vertical deste

Precisamos que:

- O conteiner utilize quebra de linhas
- A altura do container seja maior que a soma das linhas dos itens

Tipos de alinhamento:

- Centro: Alinhamento ao centro
- Stretch: e o padrão e os flex itens Igualmente
- Flex-Start: Alinhamento dos itens no Início
- Flex-End: Alinhamento dos itens no final
- Space -between: Cria um espaçamento igual entre os elementos
- space-around: Os espaçamentos do meio são duas vezes maiores que os inicias e finais

## Fundamentos do Flexbox - P2

### Flex Grow

Define a proporcionalidade de crescimento dos itens, respeitando o tamanho de seus conteúdos internos

**obs:** Não irá funcionar caso tenhamos adicionado justify-content ao nosso flex container

Só podemos ter números relacionados a proporção
