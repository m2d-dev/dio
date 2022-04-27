class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  //Getters e Setters

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return "Operação Negada";
    }
    this._saldo -= valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo += valor;
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  // Getter e Setter

  get cartaoCredito() {
    return this._cartaoCredito;
  }
  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, saldo) {
    super(agencia, numero, saldo);
    this.tipo = "universitaria";
  }

  sacar(valor) {
    if (valor > 500) {
      return "Operação negada!";
    }

    this._saldo -= valor;
  }
}

const contaMarcos = new ContaBancaria(01, 323, "corrente", 3000);

const contaEloa = new ContaUniversitaria(01, 232);

contaEloa.depositar(1000);

console.log(contaEloa.sacar(700));

contaMarcos.depositar(1000);

console.log(contaMarcos.saldo);
