const frase = "ola mundo ola mundo ola";
const resultado = contarPalavras(frase);

function contarPalavras(frase) {
  const palavras= frase.split (" ");
  const relatorio= {};
  palavras.forEach(function (palavra) {
    if (relatorio [palavra]){
      relatorio [palavra]++;
  }else { 
    relatorio [palavra]= 1;
  }});
  for (const [palavra,contagem] of Object.entries(relatorio)){
   console.log (`${palavra}: ${contagem}`);
 }
 }
 
