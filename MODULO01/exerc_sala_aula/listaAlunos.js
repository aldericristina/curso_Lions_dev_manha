const prompt = require("prompt-sync")();
let listaAlunos = ["Alderi", "Pedro"];
let Nome = prompt("Qual e o Nome do aluno que entrou");
listaAlunos.push(Nome);
let numeroAlunos = listaAlunos.length;
if (numeroAlunos == 3) {
  console.log(`Turma formada com sucesso! Alunos: ${listaAlunos}`);
}
