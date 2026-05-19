/*dada uma lista de numeros inteiros, percorra todos os 
elementos e some apenas aqueles que sao pares*/

let lista = [1,2,3,4,5,6,7,8,9,10];
let soma = 0;
let pares= []
for (let i = 0; i < lista.length; i++) {
  if (lista [i] / 2 != 0 ) {
   soma += pares[i];
  }
}
console.log ("Soma de Numeros pares= " + soma);