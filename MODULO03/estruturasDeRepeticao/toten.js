const prompt = require("prompt-sync")();
let total= 0
let resposta;
do {
  let valorItem = parseFloat(prompt("Digite o valor do item: "));
  total += valorItem;

  resposta = prompt("Deseja adicionar mais algum item? (sim/nao): ");
} while (resposta === "sim");

console.log("Valor total a ser pago: R$ " + total);