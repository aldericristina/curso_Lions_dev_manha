let lista = [1,2,4,5,6];
let maior = lista[0];
for (let i = 0; i < lista.length; i++) {
  if (lista[i] < maior) {
    maior = lista[i];
  }
}
console.log("Maior valor encontrado: " + maior);

