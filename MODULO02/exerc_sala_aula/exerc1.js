const prompt = require("prompt-sync")();
let filme= 'genero'; 
switch (filme) {
  case 'genero Acao':
  console.log ('sala1');
  break;
  case 'genero terror':
  console.log('sala2');
  break;
   case 'genero comedia':
  console.log ('sala3');
  break;
  default:
    console.log('Genero nao encontrado!');
}

