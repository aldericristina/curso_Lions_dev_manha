const prompt = require("prompt-sync")();
let pedido ={
  Cliente: prompt ("nome do cliente" ),
  hamburguerPremium:30, 
  extra:[],
  quantidadeLanches:prompt("quantos lanches vc quer"),
}

pedido.extra[0] = prompt("Qual vai ser o primeiro ingredientes extra"),
pedido.extra[1] = prompt("Qual vai ser o segundo ingredientes extra");

let valor1=parseFloat (prompt("qual o valor do ingrediente"));
let valor2=parseFloat (prompt("qual o valor do ingrediente"));


let soma= (pedido.hamburguerPremium+valor1+valor2)*pedido.quantidadeLanches
if (pedido.quantidadeLanches >2) { 
  soma=(soma*80/100)
 }

console.log (pedido);
console.log (soma);
  





 

