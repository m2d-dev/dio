# Coleções

## MAP

### Estrutura

**Características**

- Uma coleção de arrays no formato [chave, valor
- Pode ser iterado por um loop for...of
- possui uma série de métodos

**Métodos**

- Adcionar / settar --> .set --> myMap.set('apple', 'fruit'); //Map(1) {"apple" => "fruit"}
- Ler --> .get --> MyMap.get(apple); // fruit
- Deletar --> .delete --> myMap.delete(apple) // true

**MAP VS OBJETOS**

- Maps podem ser chaves de qualquer tipo
- Maps possuem a propriedade length
- Mapas são mais faceis de iterar
- Utilizado quando o valor das chaves é desconhecido
- Os valores do MAP são do mesmo tipo

## SET

### Estrutura

Sets são estruturas que armazenam apenas valores únicos (não se repetem nunca)

- Adcionar --> .add --> mySet.add('item');
- Consultar --> .has --> mySet.has(item);
- Deletar --> .delete --> mySet.delete(item);

**SET VS ARRAYS**

- Possui valores únicos
- Em vez de lenght, consulta-se o numero do registo com a propriedade size
- não possui métodos map, filter, reduce e etc.
