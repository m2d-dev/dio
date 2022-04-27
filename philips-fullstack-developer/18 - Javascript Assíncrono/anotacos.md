# Javascript Assíncrono

## Assincronicidade

**Assíncrono:** Que não ocorre ou não se efetiva ao mesmo tempo

Por Padrão o JavaScript roda de maneira síncrona

No assíncrono realizamos mais de uma coisa por vez

### Promisses

Objeto de processamento assíncrono. Inicialmente, seu valor ´w desconhecido. Ela pode, então, ser resolvida ou rejeitada

**3 estados:**

1.  Pendente
2.  Fulfilled
3.  Rejected

Depois que uma promisse é resolvida, ou rejeitada, podemos pegar seu valor e realizar outras operações

### Async / Await

Funções assíncronas precisam dessas duas palavras chave

Await - Para o código até que a promisse seja resolvida

Uma promisse, sempre vai retornar uma promisse

Podemos utilizar ty...catch

## Comsumindo APIS

Appilication Programming Interface - uma API é uma forma de intermediar os resultados do back-end

você consegue acessa-la por meio de url

JSON: Javascript Object Notation - é muito comum no uso de API

### Fetch

fetch(url, options)
.then(response => response.json())
,then(json => console.log(json))
