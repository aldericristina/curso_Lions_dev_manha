let frase= "javascript e muito legal";
let palavras= frase.split (" ");

for (let i= 0; i < palavras.length; i++){
  let palavra = palavras[i];
  palavras[i] = palavra[0].toUpperCase() + palavra.slice(1);
}
  let resultado= palavras.join (" ");
  console.log (resultado);


