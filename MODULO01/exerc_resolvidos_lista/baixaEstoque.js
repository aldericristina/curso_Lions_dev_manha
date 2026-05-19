const prompt = require("prompt-sync")();
let quantidadeCamistas = [10, 15, 8];
let vendas = parseInt(prompt("qual a quantidade de camisetas vendidas hoje"));
quantidadeCamistas[0] = quantidadeCamistas[0] - vendas;
if (quantidadeCamistas[0] <= 5) {
  console.log("Alerta:Estoque de camisetas tamanho P está critico");
} else {
  console.log("Estoque Atualizado");
}
