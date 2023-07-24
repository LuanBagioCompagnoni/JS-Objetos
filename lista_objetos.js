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

cliente.enderecos.push({
    rua: "Adelaide Rodrigues",
    numero: 1235,
    apartamento: false,
    complemento: "Casa"
})

console.log(cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
))