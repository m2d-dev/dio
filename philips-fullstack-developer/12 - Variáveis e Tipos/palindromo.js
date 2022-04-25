// let string = prompt("Digite uma Palavra: ");

function palindromo(string) {
  if (!string) return "String Inexistente";
  return string.split("").reverse().join("") === string;
}

console.log(palindromo("ovo"));

function palindromo2(string) {
  if (!string) return "string inexistente";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
console.log(palindromo2("ovo"));
