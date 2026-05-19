import numeros from "./numeros.js";

  export default function calcularMedia(num) {
  if (numeros.length === 0) {
    return null;
  }

  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma / numeros.length;
}