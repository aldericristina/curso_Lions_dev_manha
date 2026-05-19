const prompt = require('prompt-sync')();
let administradora= prompt ("valor original do condominio");
let diasaaAtraso= prompt ("quantos dias esta atrasadoo boleto")
let feriado= prompt ("boleto caiu em feriado");

if (diasaaAtraso>0 && feriado=="nao") {
administradora= (administradora*1.02)+(1.00*diasaaAtraso);    
}
console.log (`${administradora}`);

