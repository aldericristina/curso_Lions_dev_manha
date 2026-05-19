let frase = "javascript é legal".toLowerCase();
let vogais = "aeiou";
let encontradas = [];

for (let i = 0; i < frase.length; i++) {
  let letra = frase[i];

  if (vogais.includes(letra) && !encontradas.includes(letra)) {
    encontradas.push(letra);
  }
}

console.log("Vogais diferentes:", encontradas.length);
console.log("Quais são:", encontradas);