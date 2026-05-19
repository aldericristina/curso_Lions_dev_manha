const prompt = require('prompt-sync')();
let freteTransp= prompt ("qual a distancia percorrida até o cliente km rodado");
let calculoTransp= 20.00 + 1.50*freteTransp
let entregaUrgente= prompt ("a entrega é urgente");
if (freteTransp >100||entregaUrgente =="sim") {
    console.log (`adicionar uma taxa ${calculoTransp+15}`);
    }else{
        console.log  (`${calculoTransp}`);
}