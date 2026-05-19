let stringPrimeira = "Girafarigo", arrayPrimeira = [], arrayInvertida = [], stringInvertida;
stringPrimeira = stringPrimeira.toLocaleLowerCase ();
arrayPrimeira = stringPrimeira.split("");

for (let i = 0; i < stringPrimeira.length; i++) {
  arrayInvertida.push (arrayPrimeira [i]);
}
stringInvertida = arrayInvertida.join ("");
if (stringInvertida == stringPrimeira) {
  console.log (" A palavra é um palindromo")
}else {
  console.log (" A palavra não é um palindromo");
}
 