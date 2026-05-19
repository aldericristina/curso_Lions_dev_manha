/*Dada uma lista de números inteiros, calcule a amplitude — ou seja, a diferença entre o maior
e o segundo menor valor da lista. Exiba o resultado.*/

let lista = [8, 2, 10, 4, 3];

lista.sort((a, b) => a - b);

let segundoMenor = lista[1];
let maior = lista[lista.length - 1];

let amplitude = maior - segundoMenor;

console.log("Amplitude:", amplitude);