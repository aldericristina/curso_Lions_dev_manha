/*Dada uma string, percorra cada caractere e verifique se ele é uma consoante (ou seja, uma
letra do alfabeto que não é vogal). Considere apenas letras ( a-z ). Retorne a quantidade total
de consoantes encontradas.
Dicas para manipulação de texto:
Uma string pode ser percorrida como um array: use for (let i = 0; i <
texto.length; i++) e acesse cada caractere com texto[i] .
Use .toLowerCase() para converter a string para minúsculas antes de comparar,
assim você não precisa verificar maiúsculas e minúsculas separadamente.
Crie uma string ou array com todas as vogais ( "aeiou" ) e use .includes()
para verificar se o caractere atual não está nessa lista: if
(!vogais.includes(texto[i])) .
Lembre-se de ignorar espaços e caracteres especiais — verifique se o caractere é
uma letra antes de contar*/

let palavra= "amor";
let vogais= ("aeiou");
let consoante=("bcdrgt");
let letras= []
palavra= palavra.toLowerCase();

for (let i = 0; i < palavra.length; i++){
let letras = palavra[i];
if (letras >= 'a' && letras <= 'z') {
    if (!vogais.includes(letras)) {
      consoantes++;
    }
  }
}

console.log("Quantidade de letras encontradas: " + letras);
