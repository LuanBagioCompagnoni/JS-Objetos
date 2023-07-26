const dados = require("./cliente.json");

console.log(dados)

const clienteJSON = JSON.stringify(dados);

console.log(clienteJSON)

const clienteObjeto = JSON.parse(clienteJSON)

console.log(clienteObjeto)