const prompt = require('prompt-sync')();
let custodeProducao= prompt ("Qual o custo da produçao do lote? ");
let valordeVenda= prompt ("qual o valor de venda do lote?");
let lucroBruto=valordeVenda - custodeProducao;

if (lucroBruto <500.00) {
    console.log("Atenção:Margem de lucro perigosamente baixa");
 }else {
    console.log(`Margem de lucro saudavel: R$ ${lucroBruto}`)
 }

 
