const prompt = require("prompt-sync")();

let par= 0;
let impar= 0;

let somaPares= 0;
let somaImpares= 0;

let mediaPares= 0;
let mediaImpares= 0;

for (let i = 0; i < 1000; i++) {

if ( i % 2 == 0) {
  par++;
  somaPares += i;  
}else{
   impar++; 
  somaImpares += i;
  }
}

mediaPares = somaPares / par;
mediaImpares = somaImpares / impar;

if (mediaPares>mediaImpares) {
  console.log(`A media dos pares(${mediaPares})é maior que a media dos impares(${mediaImpares})`)
}else{
  console.log (`A media dos impares (${mediaImpares})é maior que a media dos pares (${mediaPares})`)
}
console.log (somaPares)
console.log (somaImpares)


