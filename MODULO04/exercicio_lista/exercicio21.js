const prompt = require("prompt-sync") ()

let idade= Number(prompt ("Informe sua idade "));
let credencialVip=prompt("Possui crecendial vip (sim/nao)");

if (idade <18) {
  console.log ("Acesso negado: Menor de Idade ");
}else if ( credencialVip === "sim"){
  console.log ("Acesso liberado, para area Vip") 
}else {
 console.log("Acesso liberado para a pista comum");
}
