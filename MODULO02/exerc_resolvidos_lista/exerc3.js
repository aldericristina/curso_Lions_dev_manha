const prompt = require('prompt-sync')();
let produtoEstoque= prompt ("qual a quantidade do produto em estoque em unidades");
let quantidadeMinima= prompt ("qual a quantidade minima ");
let calculo = produtoEstoque - quantidadeMinima
if (calculo <0 ) {
    console.log (`Alerta:Estoque baixo! É necessario solicitar a compra de ${calculo *-1}`)
}
else {
    console.log ("estoque regularizado");
}
