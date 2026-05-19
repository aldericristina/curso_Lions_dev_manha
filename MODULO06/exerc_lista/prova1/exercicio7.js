let lista= [1,2, 3, 4, 4, 5, 8, 9,9];
let resultado= []

for (let i = 0; i < lista.length; i++) {
 if (! resultado.includes ( [i] )) {
 resultado.push (lista [i]);
}
}
console.log("Lista de numeros repetidos: " + resultado)
