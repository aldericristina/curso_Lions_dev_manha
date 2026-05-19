
let frase= ("Removendo espaços da frase");
let resultado=""
for (let i = 0; i < frase.length; i++) {
  if (frase[i] !== " ") {
    resultado += frase[i];
  }
}   
console.log ("Exiba a nova frase", resultado)
