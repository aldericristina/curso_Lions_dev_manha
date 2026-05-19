const prompt = require("prompt-sync")();
let bebida1 ={};
let bebida2 ={};
let festmusic = { 
  nomeEmpresa : "Eventos Festival", 
  orcamentoTotal: 500, 
  tipoPacote :"Open Bar Fechado",
  extra : [bebida1,bebida2]
}

festmusic.extra[0]= bebida1;
festmusic.extra[1]= bebida2;
bebida1.nomeBebida = prompt("Qual o nome da bebida 1? ");
bebida1.valorBebida = parseFloat(prompt("Qual o valor da bebida 1?"));

bebida2.nomeBebida = prompt("Qual o nome da bebida 2?");
bebida2.valorBebida = parseFloat(prompt("Qual o valor da bebida 2? "));

festmusic.orcamentoTotal= festmusic.orcamentoTotal-bebida1.valorBebida-bebida2.valorBebida

console.log(festmusic);






