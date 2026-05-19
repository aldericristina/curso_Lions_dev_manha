const prompt = require("prompt-sync")();
let numero= parseInt(prompt("digite qual tabuada voce quer"));

for (let i = 0; i < 11; i++) {
  console.log  (`${numero}* ${i} = ${numero*i}`);
}


