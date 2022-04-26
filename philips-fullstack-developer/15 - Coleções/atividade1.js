function getAdmins(map) {
  let admins = [];

  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }

  return admins;
}

const usuarios = new Map();

usuarios.set("Marcos", "Admin");
usuarios.set("Rafael", "Funcionario");
usuarios.set("Pedro", "Admin");
usuarios.set("Ivan", "Admin");
usuarios.set("Leo", "Funcionario");
usuarios.set("Alber", "Funcionario");

console.log(getAdmins(usuarios));

let array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {
  const mySet = new Set(array);

  return [...mySet];
}

console.log(valoresUnicos(array));
