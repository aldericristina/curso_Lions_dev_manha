const prompt = require("prompt-sync")();
let filme= prompt ('Qual o genero do seu filme'); 
switch (filme) {
  case 'Acao':
  console.log ('sala1');
  break;
  case 'Terror':
  console.log ('sala2');
  break;
   case 'Comedia':
  console.log ('sala3');
  break;
  default:
    console.log('Genero nao encontrado!');
}