const prompt = require("prompt-sync")();
const avaliarTemperaturas = (temp) => {
let media = (temp[0] + temp[1] + temp[2]) / 3;
  if (media > 30) {
    return "Alerta de Aquecimento";
  } else {
    return "Clima Estável";
  };
}
let temperaturas= [];
  for (let i = 0; i < 3; i++) {
  let temp = Number(prompt(`Digite a ${i + 1}ª temperaturas: `));
  temperaturas.push(temp);
}

let resultado = avaliarTemperaturas(temperaturas);
console.log("Temperaturas:", temperaturas);
console.log("Resultado:", resultado);

