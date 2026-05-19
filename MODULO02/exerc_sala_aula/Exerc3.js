const prompt = require("prompt-sync")();
let horasEstimadas = prompt("qual a quantidade de horas estimanda de trabalho?");
let valorTotalHora = 45.0 * horasEstimadas;
let clienteOng = prompt("o Cliente é uma ong?");
if (clienteOng == "sim" && 5000.0 < valorTotalHora) {
  valorTotalHora = "valorTotalhora - (valorTotalHora * 10) / 100";
  console.log(`o valor total e igual a ${valorTotalHora}`);
} else {
  console.log(`o valor total e igual a ${valorTotalHora}`);
}
