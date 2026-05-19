const prompt = require('prompt-sync')();
let simuladorInvest= prompt ("o cliente possui qual quantidade de cotas?");
let valorRendimento= prompt ("qual o valor de cada cota");
let rendimnentoTotal= valorRendimento*simuladorInvest
if (rendimnentoTotal >=100.00) {
    console.log (`Você já tem saldo suficiente para comprar uma nova cota e reinvestir!`);
 } else {
    console.log (`Rendimento recebido: R$ ${rendimnentoTotal} Acumule mais para reinvestir`)
     }