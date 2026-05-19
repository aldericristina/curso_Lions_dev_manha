const prompt = require("prompt-sync")();
let lotes = [50, 40, 60, 30, 70];
totalIngressos = 0;
for (let i = 0; i < lotes.length; i++) {
  totalIngressos = totalIngressos + lotes[i];
}
console.log("O total de ingressos vendidos foi" + totalIngressos);
