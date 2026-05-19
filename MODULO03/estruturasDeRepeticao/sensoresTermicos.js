const prompt = require("prompt-sync")();
let senInicial = {
  stermicos:[ ],
}
senInicial.stermicos[0]= parseFloat(prompt("Qual a temperatura inicial do sensor"));
for (let index = 1; index < 5; index++) {
  senInicial.stermicos[index] = senInicial.stermicos[index-1] + 2;
}
console.log(senInicial.stermicos);