const prompt = require ("prompt-sync")();
let notas = [];
let nota1 = parseFloat (prompt("digite a nota da sua prova 1"));
let nota2 = parseFloat (prompt("Digite a nota da sua prova 2"));
notas.push(nota1);
notas.push(nota2);
let media= (notas [0]+notas[1])/2;
console.log (`Resultado da media ${media}`);


