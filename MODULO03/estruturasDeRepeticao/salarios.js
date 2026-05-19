const prompt = require("prompt-sync")();
let salarios= [2500, 3200,4100,5000,6200];
salarios.forEach((element,index) => {//index posicao do array, 
  element=element*1.10//elemente conteudo da posicao []
  salarios[index]=element
  console.log (element)
});
console.log (salarios)
