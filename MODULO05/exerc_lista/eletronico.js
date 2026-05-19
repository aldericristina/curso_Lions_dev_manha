const prompt = require("prompt-sync")();

const objeto = {
  nome: prompt("Digite o seu nome"),
  
   };
let produto = Number(prompt("Escolha um produto:Fone,Teclado,Mouse,Digite o número: "));
let preco=0;
 switch (produto) {
  case 1: 
    preco= 60
    console.log ("voce escolheu fone de ouvido")
    break;
  case 2:
    preco= 45
    console.log("voce escolheu teclado")
    break;
  case 3: 
    preco= 36
    console.log ("voce escolheu o mouse")
    break;

  default: "Codigo invalido, valor zero"
    break;
 }
 console.log ("Preço do produto: R$" + preco);
 