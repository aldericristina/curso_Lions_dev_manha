/*Dada uma lista de números inteiros, percorra todos os elementos e identifique qual é o menor
valor presente na lista. Exiba esse valor.*/

let lista= [1,2,3,4,5,-6,6,7,8,9,10]
let menor= lista [0]
for (let i = 0; i < lista.length; i++) {
  if (menor>lista[i]){
    menor= lista [i] 
  }
  }

console.log ("Exiba o menor Valor encontrado" + menor)

