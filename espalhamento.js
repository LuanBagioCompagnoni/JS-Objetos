const cliente = {
    nome: "Maria",
    idade: 32,
    email: "maria@firma.com",
    telefone:["2233333333", "2244444444"]
};

cliente.enderecos = [{
    rua: "Felipe Schimidt",
    numero: 1234,
    apartamento: true,
    complemento: "ap 932"
}];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone)