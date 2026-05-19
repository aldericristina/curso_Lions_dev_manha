let lista = [8, 2, 10, 4, 3];
lista.sort((a, b) => a - b);

let Menor = lista[1];
let maior = lista[lista.length - 1];

let amplitude = maior && Menor;

console.log("Amplitude: ",+amplitude);