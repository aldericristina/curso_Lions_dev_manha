const prompt = require ("prompt-sync")()
let tarefas = [];
let tarefa0=  prompt("Digite uma tarefa");
let tarefa1=  prompt("digite uma tarefa");
let tarefa2=  prompt("digite uma tarefa");

tarefas.push(tarefa0, tarefa1,tarefa2);


console.log (`"Voce tem  ${tarefas.length} tarefas na sua lista, Sao: ${tarefas}"`);

tarefas.pop()
console.log (`"Voce tem  ${tarefas.length} tarefas na sua lista,Sao: ${tarefas}"`);
