const prompt = require("prompt-sync")();
let taxis = [
  { placa: "DEF-4567", faturamentoDia: 0, emServico: false },
  { placa: "BHJ-9803", faturamentoDia: 0, emServico: false }
];
function registrarCorrida(placa, valor) {
  for (let i = 0; i < taxis.length; i++) {
  if (taxis[i].placa.toLowerCase() === placa.toLowerCase()) {

    taxis[i].emServico = true;
    taxis[i].faturamentoDia += valor;
    taxis[i].emServico = false;
  return `Corrida registrada para ${taxis[i].placa}`;
    }
  }
}
let opcao;
do {
  console.log("\n===== COOPERATIVA DE TÁXIS =====");
  console.log("1 - Registrar corrida");
  console.log("2 - Encerrar expediente");

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      let placa = prompt("Digite a placa do táxi: ");
      let valor = Number(prompt("Digite o valor da corrida: R$ "));
      console.log(registrarCorrida(placa, valor));
      break;

    case "2":
      console.log("\n Encerrando expediente...");
      break;

    default:
      console.log("Opção inválida.");
  }

} while (opcao !== "2");
console.log("\n===== FATURAMENTO FINAL =====");

for (let i = 0; i < taxis.length; i++) {
  console.log(`Placa: ${taxis[i].placa} | Faturamento: R$ ${taxis[i].faturamentoDia.toFixed(2)}`);
}
