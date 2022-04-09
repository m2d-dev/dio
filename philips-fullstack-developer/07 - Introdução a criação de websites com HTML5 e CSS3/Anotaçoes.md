# Estrutura Básica

Elemento HTML

Tag de abertura e fechamento --> Atributos --> Conteúdo

**Doctype** não é HTML --> Diz ao navegador o que você está escrevendo

**Head**: Temos meta informações que navegador, buscadores necessitam

* **Principais**
  * Charset: Codificação de Caracteres, mais comum utf-8
  * Script: para javascript
  * Style e Link: para CSS
  * Title: Título da página

**Body**: Conteúdo da nossa página (Textos, Vídeos, imagens)



##  Entendendo o que é Semântica

**Section**: Representa uma seção genérica de conteúdo

**Header:** Cabeçalho da página (logo, menu, barra de pesquisa)

**Article**: Conteúdo independente e de maior relevância dentro de uma pagina

**Asside:** Seção que engloba conteúdos relacionados ao conteúdo principal. Geralmente, representados com barras laterais

**Footer:** Rodapé da página

**H1-H6:** Títulos da página, sendo H1 de maior relevância e h6 menor. Boa prática é ter somente 1 H1 por página



## Como usar textos e links em HTML

**p:** Representa um parágrafo <p> podemos colocar texto, vídeos, imagens

**a**: Representa um link , uma ancora para outro destino

* Atributo **target** informa como esse link será aberto, página nova, mesma página.
* Atributo **href** representa hyperlink para onde a âncora aponta
  * prefixo **mailto** direciona para e-mail
  * prefixo **tell** para ligação, quando em dispositivos móveis.

##  Como inserir imagens em seu site

**img**: <img> será usada para inserir imagens

* **src**: obrigatório e guarda o caminho da imagem

* **alt** mostra a descrição da foto, serve para acessibilidade

  

## Como organizar listas com HTML

* **ul** Ordem dos itens não é importante
* **ol** Ordem dos itens é importante
* **li**: Lista propriamente dita

# CSS

## Introdução ao CSS3

Criar regras de estilos para elementos, ou grupos de elementos

id e classes representam qualquer tipo de elemento

**id**: id só pode ser usado uma vez na página. #nome-do-id

**class:** conjunto de elementos  .nome-da-classe



## Conceitos Básicos

Box Model: Navegador representa cada conteúdo HTML em caixas retangulares

![image-20220408164142887](C:\Users\Marcos\AppData\Roaming\Typora\typora-user-images\image-20220408164142887.png)

**Margin:** Espaçamento entre elementos

**Border:** Circundam o espaçamento e o conteúdo

**Padding:** Espaçamento entre a boda e o conteúdo

**Content:** Conteúdo

### Atenção: CSS funciona como cascata, seguindo o fluxo e acontecendo sobreposição

## Dimensão e Alinhamento

Width: Largura

Height: Altura

Max-width: largura máxima

Max-height: altura máxima

Margin: Alinhamento dos elementos

Text align: Alinhar textos