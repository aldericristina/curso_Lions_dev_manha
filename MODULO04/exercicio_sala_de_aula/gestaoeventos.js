const prompt = require("prompt-sync")();
let grupoCorporativo = {
  nomeEmpresa: prompt("Digite o nome da empresa: "),
  orcamentoTotal: parseFloat(prompt("Digite o orçamento total da noite: R$ ")),
  openBarFechado: false,
  consumoExtras: []
};
let bebida1 = prompt("Digite o nome da primeira bebida importada: ");
let bebida2 = prompt("Digite o nome da segunda bebida importada: ");
let valorExtras = Number(prompt("Digite o valor total das duas bebidas: R$ "));

grupoCorporativo.consumoExtras.push(bebida1, bebida2);

grupoCorporativo.orcamentoTotal -= valorExtras;

if (grupoCorporativo.orcamentoTotal < 0) {
  grupoCorporativo.openBarFechado = true;
  grupoCorporativo.multaExcedente = 500;
}
console.log("\n===== FECHAMENTO DO CAMAROTE =====");
console.log("Empresa:", grupoCorporativo.nomeEmpresa);
console.log("Consumo extras:", grupoCorporativo.consumoExtras);
console.log("Open bar fechado?", grupoCorporativo.openBarFechado);

if (grupoCorporativo.openBarFechado) {
  console.log("Multa excedente: R$", grupoCorporativo.multaExcedente);
  console.log("Saldo final: NEGATIVO");
} else {
  console.log("Saldo restante: R$", grupoCorporativo.orcamentoTotal.toFixed(2));
}