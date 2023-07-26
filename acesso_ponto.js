const cliente = {
    nome: "André",
    idade: 32,
    cpf: "123.456.789-00",
    email: "andre@teste.com"
};

console.log(`O nome do cliente é ${cliente.nome}, e idade ${cliente.idade}`);
console.log(`3 primeiros digitos do CPF: ${cliente.cpf.substring(0,3)}`);