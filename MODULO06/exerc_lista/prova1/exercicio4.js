let letra= ("a,e,i,o,u")
let vogais=0;
texto= texto.toLowerCase();

for (let i = 0; i < letra.length; i++){
let letra = letra[i];
if (letra >= 'a' && letra <= 'z') {
    if (vogais.includes(letra)) {
      vogais++;
    }
  }
}

console.log("Quantidade de vogais encontradas: " + vogais);
