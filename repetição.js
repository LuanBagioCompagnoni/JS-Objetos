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

for(let chave in cliente){
    let tipo = typeof(cliente[chave])
    if(tipo !== "object" && tipo !== "function")
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
}