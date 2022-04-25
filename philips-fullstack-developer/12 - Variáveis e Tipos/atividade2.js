function trocaZero(array) {
  if (!array) return "Parâmetro Invalido";

  if (!array.length) return -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(`Substituindo ${array[i]} por 0...`);
      array[i] = 0;
    }
  }

  return array;
}

//let array = [];
let array = [1, 3, 4, 6, 80, 33, 23, 90, 0];
console.log(trocaZero(null));
