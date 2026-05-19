/*Dada uma lista de números inteiros, percorra todos os elementos e conte quantos deles são
ímpares. Exiba a quantidade encontrada./*/

let lista= [1,2,3,4,5,6,7,8,9,10]
let impar= 0
for (let i = 0; i < lista.length; i++) {
  if (lista [i] %2  != 0 ) {
   impar ++
  }
}
console.log ("Quantidade encontrada de Numeros impar" + impar ,)

