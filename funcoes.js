const cliente = {
    nome: "Maria",
    idade: 32,
    email: "maria@firma.com",
    telefone:["2233333333", "2244444444"],
    saldo: 200,
    efetuapagamento: function (valor) {
        if(valor >= this.saldo){
            console.log("Saldo insuficiente!")
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`)
        }
    }
};

cliente.efetuapagamento(250);