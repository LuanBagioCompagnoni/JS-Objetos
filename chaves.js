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

let chaves = Object.keys(cliente);

if(!chaves.includes("enderecos")){
    console.error("Erro! É obrigatório haver um endereco.")
}