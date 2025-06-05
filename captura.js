console.log("=== ENCAPSULAMENTO===");
class ContaBancaria{
    #saldo = 0;
    constructor(titular){
        this.titular = titular;
    }
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Deposito de R$${valor} realizado.`);

        }else{
            console.log("valor inválido para depósito");
        }
    }
    sacar(valor){
      if(valor >0 && valor >= this.#saldo){
        this.#saldo -= valor;
        console.log(`saque de R$${valor} realizado`);
      }
        
    else{console.log("saldo insuficiente ou valor invalido");}
}
consultarSaldo(){return this.#saldo}
}
const minhaconta = new ContaBancaria("alex");
minhaconta.depositar(300000000);
minhaconta.sacar(30000);
console.log(`saldo: R$${minhaconta.consultarSaldo()}`);
