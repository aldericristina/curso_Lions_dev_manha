import numeros from "./numeros.js";
numeros.sort ((a,b)=> a-b)

function calcularMediana() {
  
  // mat e da biblioteca e puxa o numero impar e o arredonda para baixo

  if (numeros.length % 2 == 0) {
    return (numeros[(numeros.length / 2)] + numeros[(numeros.length / 2)-1]) / 2;
  } else {
    return listaOrdenada[Math.floor(numeros.length / 2)];
  }
} 
//o sort(a,b) => orgniza de forma alfabeticamente ou se colocado numeros.sort ((a,b)=> a-b)
//organiza de forma crescente , do contrario de b,a de forma decrescente 

export default calcularMediana