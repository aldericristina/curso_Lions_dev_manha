const prompt = require('prompt-sync')();
let salario= prompt ("Favor digitar seu salario liquido");
let parcela= prompt ("valor da parcela do emprestimo");
let cliente= prompt ("Cliente possui restricao no nome?");
let calculoEmprestimo= 30*salario/100

if (cliente == "sim"||calculoEmprestimo<parcela) { 
    console.log ("Credito negado");
    }
else {-
    console.log ("Credito aprovado");    
}