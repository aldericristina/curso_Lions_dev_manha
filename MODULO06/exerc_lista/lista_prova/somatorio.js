/*Dada uma lista com 5 valores representando preços de produtos em um carrinho de compras,
percorra todos os elementos, calcule a soma total e, ao final, exiba o valor médio gasto por
produto.*/

let Precos= [10, 30, 70, 120, 188]
let soma = 0

for (let i = 0; i< Precos.length; i++) {//nao esquecer da condicao i< "menor que alguma coisa"
  soma += Precos[i];//length tamanho do array
}
let media = soma /Precos.length;

console.log("Soma total:", soma);
console.log("Média por produto:", media);
