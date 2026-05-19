
function calcularAmplitude(lista) {
  lista.sort((a, b) => a - b);

  return lista[lista.length - 1] - lista[1];
}

console.log(calcularAmplitude([5, 1, 9, 3, 7]));