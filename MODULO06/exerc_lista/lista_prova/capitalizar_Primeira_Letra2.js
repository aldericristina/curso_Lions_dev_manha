let frase = "javascript é muito legal";

let resultado = frase
  .split(" ")
  .map(p => p[0].toUpperCase() + p.slice(1))
  .join("  ");

console.log(resultado);