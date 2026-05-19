/*Dadas duas palavras, verifique se uma é anagrama da outra — ou seja, se ambas possuem
exatamente as mesmas letras, na mesma quantidade, porém em ordem diferente. Exiba se são
ou não anagramas.*/
function saoAnagramas(palavra1,palavra2) {
  let p1 = palavra1.toLowerCase().split("").sort().join("");
  let p2 = palavra2.toLowerCase().split("").sort().join("");
   
  if (p1 === p2) {
    return "São anagramas";
  } else {
    return "Não são anagramas";
  }
}

console.log(saoAnagramas("rama", "amar")); // true
console.log(saoAnagramas("gato", "rato")); // false 
