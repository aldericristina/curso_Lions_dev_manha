const prompt = require('prompt-sync')();
let comissao= prompt ("valor dde venda realizada mes");
if (comissao>20000.00) {
    console.log (`${comissao*1.05}`);
}else{
    console.log (`${comissao*1.02}`);
}
