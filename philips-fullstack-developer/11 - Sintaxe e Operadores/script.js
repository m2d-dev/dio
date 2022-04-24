var n1;
var n2;
var soma;
var mensagem;

n1 = Number(prompt("Digite um número qualquer:"));
n2 = Number(prompt("Digite outro número qualquer:"));

// ! feito por mim

function verificadora(n1, n2) {
  if (!n1 || !n2) {
    mensagem = "Erro - Parâmetros Inválidos!";
  } else {
    soma = n1 + n2;
    if (n1 === n2) {
      mensagem = `Os números ${n1} e ${n2} são iguais. `;
    } else {
      mensagem = `Os números ${n1} e ${n2} são diferentes. `;
    }

    if (soma <= 10) {
      mensagem += `Sua soma é ${soma}, que é menor que 10 e menor que 20`;
    } else if (soma > 10 && soma < 20) {
      mensagem += `Sua soma é ${soma}, que é maior que 10 e menor que 20`;
    } else {
      mensagem += `Sua soma é ${soma}, que é maior que 10 e maior que 20`;
    }
  }

  alert(mensagem);
}

verificadora(n1, n2);

// ! Feito pelo Professor

/*
function comparaNumeros(num1, num2) {
  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);

  return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = "";
  if (num1 !== num2) {
    saoIguais = "não";
  }

  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;
  let resultado10 = "menor";
  let resultado20 = "menor";
  const compara10 = soma > 10;
  const compara20 = soma > 20;

  if (compara10) {
    resultado10 = "maior";
  }

  if (compara20) {
    resultado20 = "maior";
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20. `;
}

console.log(comparaNumeros(20, 30));

*/
