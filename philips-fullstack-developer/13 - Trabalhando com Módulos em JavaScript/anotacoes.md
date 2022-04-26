# Trabalhando com Módulos em JavaScript

## Utilizando módulos

São arquivos JavaScript que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo

**Algumas Ventagens**

- Organização do código
- Compartilhar variáveis em escopos diferentes
- Explicita as dependências dos arquivos

### Exportar

**Named Exports**

Utilizando a palavra reservada export na frente da função

ou utilizando

export {
funcao1,
funcao2,
funcao3
}

**Default Exports**

- Só pode haver um por arquivo
- Será o retorno padrão do seu arquivo

### Importar

**Named exports**

import {funcao, variavel, classe} from './arquivo.js;

**Default Exports**

import valorDefault from './arquivo.js'

**Tracando nome de imports**

Dar um apelido pra função

import {arquivo as Apelido} from './arquivo.js';
Apelido.metodo();

\*\*Importando todos os dados de um arquivo

import \* INFOS from './arquivo.js';
INFOS.metodoA();
console.log(INFOS.variavel);

### Vinculando ao HTML

<script type="module" src= "./main.js"></script>

### Curiosidades

- Módulos sempre estãoem "strict mode" Procurar mais sobre o assunto
- Podem ser utilizadas as extensões .js e .mjs
- Para testes locais é necessário utilizar um servidor;
- Ao importar, sempre lembre da extensão (.js, .mjs);
- Ao importar , sempre utilize "./" como ponto de partida

### Imports Dinâmicos

Importa para um arquivo JS, criando uma arvore de arquivos.
Pode ser importado tudo no carregamento da página, ou sobre demanda.

#### Atenção: Módulos são muito utilizados por frameworks e algumas bibliotecas JS
