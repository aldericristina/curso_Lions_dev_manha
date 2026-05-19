 const prompt = require("prompt-sync")();
let rastreio = prompt ("Digite o codio do rastreio(E,P,C)")
let codigo = ""
status: ""
function atualizarRastreio(codigo) {
  
    switch (codigo.toUpperCase()){
  case "E":
    return("Em rota de entrega");
  case "P":
    return("Pendente de envio");
  case "C":
    return ("Cancelado");
  default:
    return "Status invalido"
}}

let encomenda = {
    id:55 
};
  encomenda.status = atualizarRastreio(rastreio)
  console.log("Registro da encomenda:");
  console.log(encomenda);
  console.log ("Qual o codigo do status da entrega?\nP, E, C ");
 