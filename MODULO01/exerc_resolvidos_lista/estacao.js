const prompt = require("prompt-sync")();
let estacao = {
  id: "sensor1",
  local: "Laboratorio",
  temperatura: [],
};
estacao.temperatura[0] = parseFloat(prompt("Adicione temperatura 1"));
estacao.temperatura[1] = parseFloat(prompt("Adicione temperatura 2"));
estacao.temperatura[2] = parseFloat(prompt("Adicione temperatura 3"));
let media =
  (estacao.temperatura[0] + estacao.temperatura[1] + estacao.temperatura[2]) /
  3;
if (media > 35) {
  estacao.alerta = true;
  console.log("Perigo:Media de temperatura extrema( )");
} else {
  estacao.alerta = false;
  console.log("Temperatura dentro da normalidade");
}
console.log(`id:${estacao.id}, local:${estacao.local},temperatura:${media} `);
