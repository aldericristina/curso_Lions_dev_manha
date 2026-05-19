const prompt = require('prompt-sync')();
let nota1 = parseFloat (prompt ('qual é a nota da primeira prova ?'));
let nota2 = parseFloat (prompt('qual é a nota da segunda prova ?'));

let media = (nota1 + nota2) / 2;
console.log (`a media das notas é ${media}`);
