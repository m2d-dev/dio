# Debugging e Error Handling

## Tipos de Erros

### ECMAScript Erro

Erros que ocorrem em tempo de execução

**Composto por:** (mensagem)(nome)(linha)(crash)

### DOMEException Erro

Erros relacionados aos Document Object Model (DOM) - Quando vc vai rodar essa arvore de elementos dentro de uma página da web

## Tratando Erros

### Throw

retorna como erro, sendo possível alinhas as propriedades do erro

### Try...Cath

Try (Tente)... Deu erro... Cath (Captura o erro e faz o devido tratamento)

**Estrutura**

try {
instruções
}
catch(e){
instruções
}

**Finally**

Também pode compor o bloco try...catch e é executado de qualquer forma, tendo erro, ou não

try{
instruções
}
catch {
instruções
}
finally {
instruções
}

## Criando Erros

Como manipular o Objeto Error

Parametros (message, fileName, lineNumber) // Todos são opcionais

Como usar

const MeuErro = new Error('mensagem inválida');
MeuErro.name = 'InvalidMessage';

lançando meu erro

throw MeuErro;
