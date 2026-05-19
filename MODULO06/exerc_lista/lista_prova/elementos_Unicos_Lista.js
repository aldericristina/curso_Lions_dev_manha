/*Dada uma lista de números inteiros que pode conter valores repetidos, crie uma nova lista
contendo apenas os valores que aparecem uma única vez (sem repetição). Exiba a lista
resultante.*/
let listaInteiros= [1,2, 3, 4, 4, 5, 8, 9,9];
let resultado= []
for (let index = 0; index < listaInteiros.length; index++) {
 if (! resultado.includes(listaInteiros [i] )) {
 resultado.push (listaInteiros [i]);
}
}
console.log ("Lista de numeros sem repeticao:" + resultado);
