const prompt = require("prompt-sync")();
let fichaVeterinaria = {};
fichaVeterinaria.nome = prompt("Nome do cachorro");
fichaVeterinaria.raça = prompt("Raça do cachorro");
fichaVeterinaria.idade = parseInt(prompt("idade do cachorro"));

if (fichaVeterinaria.idade >= 8) {
  console.log(
    `O paciente ${fichaVeterinaria.nome}é senior e precisa de exames de rotina`,
  );
} else {
  console.log("Paciente na faixa de idade regular");
}
console.log(fichaVeterinaria);
