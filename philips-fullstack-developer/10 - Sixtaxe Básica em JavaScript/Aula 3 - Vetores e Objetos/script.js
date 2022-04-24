// O que são Vetores e Arrays

//Como declarar um array

//let array = ["String", 1, true];
//console.log(array);

// pode guardar vários tipos de dados

/*
let array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
console.log(array);

console.log(array[1]);

//forEach

array.forEach(function (item, index) {
  console.log(item, index);
});

//push

array.push("novo item");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift("novo item no inicio");
console.log(array);

console.log(array.indexOf(true));
array.splice(0, 3);
console.log(array);

let novoarray = array.slice(0, 3);
console.log(novoarray);

*/

let objeto = {
  string: "string",
  number: 1,
  boolean: true,
  array: ["array"],
  objetoInterno: { objetoInterno: "objeto interno" },
};

console.log(objeto);

console.log(objeto.boolean);

var string = objeto.string;

console.log(string);

var { string, boolean, number } = objeto;

console.log(string, boolean, number);
