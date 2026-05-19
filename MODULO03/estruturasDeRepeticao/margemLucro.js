const prompt = require("prompt-sync")();

let custoDeProducao= parseFloat (prompt("Digite o valor do custo"));
let valorDeVenda= parseFloat (prompt("Digite o valor de venda "));
let lucro= valorDeVenda - custoDeProducao;


 if (lucro < 500) {
 console.log ("Atenção:Margem de lucro perigosamente baixa")
  }  else {
  console.log (`Margem de lucro saudável,R$: ${lucro.toFixed (2)}`);
   }
 