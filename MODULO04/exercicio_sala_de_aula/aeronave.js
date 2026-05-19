const prompt = require("prompt-sync")();
let turbina = {
  lado: "Motor Esquerdo",
  status: "Desligado",
  leituras: [0, 0, 0]
};
let novaTemp = Number(prompt("Digite a nova temperatura (°C): "));
let novaPressao = Number(prompt("Digite a nova pressão do óleo (PSI): "));
let novoCombustivel = Number(prompt("Digite o nível de combustível (%): "));

turbina.leituras[0] = novaTemp;
turbina.leituras[1] = novaPressao;
turbina.leituras[2] = novoCombustivel;

if (
  novoCombustivel > 20 &&
  novaPressao > 50 &&
  novaTemp >= 20 &&
  novaTemp <= 90
) {
  turbina.status = "Ligado";
} else {
  turbina.status = "Falha Crítica";
  turbina.bloqueioAtivado = true;
}
console.log("\n===== PAINEL DA TURBINA =====");
console.log("Lado:", turbina.lado);
console.log("Status:", turbina.status);
console.log("Leituras:");
console.log("Temperatura:", turbina.leituras[0] + "°C");
console.log("Pressão:", turbina.leituras[1] + " PSI");
console.log("Combustível:", turbina.leituras[2] + "%");

if (turbina.bloqueioAtivado) {
  console.log(" Bloqueio de segurança ativado!");
}
