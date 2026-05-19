let lista = [1,2,3,4,5,6,7,8,9,10];
let soma = 0;
for (let i = 0; i < lista.length; i++) {
  if (lista [i] % 2 != 0 ) {
   soma += lista[i];
  }
}
console.log ("Soma de Numeros impar= " + soma);

