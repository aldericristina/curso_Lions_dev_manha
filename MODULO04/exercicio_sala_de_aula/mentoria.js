const prompt = require("prompt-sync")();
let projeto = {
  coordenador: prompt("Nome do coordenador: "),
  limiteMaximoVagas: Number(prompt("Limite máximo de vagas: ")),
  areaEstudo: prompt("Área de estudo do projeto: "),
  status: "Aberto",
  mentores: [
    { nome: "Ana Silva", areaDeAtuacao: "Tecnologia" },
    { nome: "Carlos Souza", areaDeAtuacao: "Tecnologia" }
  ]
};
let novoNome = prompt("Nome do novo voluntário: ");
let novaArea = prompt("Área de atuação do voluntário: ");
if (
  projeto.mentores.length < projeto.limiteMaximoVagas &&
  novaArea === projeto.areaEstudo
) {
   projeto.mentores.push({
    nome: novoNome,
    areaDeAtuacao: novaArea
  });

  console.log("\n✅ Voluntário cadastrado com sucesso!");
} else {
   projeto.status = "Bloqueado para Inscrições";
  console.log("\n❌ Cadastro não permitido!");
}
console.log("\n===== FICHA DO PROJETO =====");
console.log("Coordenador:", projeto.coordenador);
console.log("Área de Estudo:", projeto.areaEstudo);
console.log("Limite de vagas:", projeto.limiteMaximoVagas);
console.log("Status:", projeto.status);

console.log("\nMentores cadastrados:");
projeto.mentores.forEach((mentor, index) => {
  console.log(`${index + 1}. ${mentor.nome} - ${mentor.areaDeAtuacao}`);
});