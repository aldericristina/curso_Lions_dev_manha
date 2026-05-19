/*Dada uma lista de números inteiros, encontre o segundo maior valor presente. O segundo
maior deve ser diferente do maior (por exemplo, na lista [5, 5, 3, 1] , o segundo maior é
3 ).
Dica geral: Lembrem-se que os dados capturados pelo prompt-sync vêm como
formato de Texto (String). Para fazer contas matemáticas como adição ou validações de
limite, é muito importante converter a entrada para número (usando Number() ,
parseInt() ou parseFloat() ).*/
const prompt = require("prompt-sync")();
let lista = [];

for (let i = 0; i < 4; i++) {
  let numero = Number(parseFloat(prompt("Digite um número: ")))
  lista.push(numero);
}
let maior = lista[0];
for (let i = 0; i < lista.length; i++) {
  if (lista[i] > maior) {
    maior = lista[i];
  }
}
console.log("Maior valor encontrado: " + maior);


