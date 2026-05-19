import PromptSync from "prompt-sync"; 
const prompt = PromptSync ()

import somar from "./somar.js";
import subtrair from "./subtrair.js";
import divisao from "./divisao.js";
import multiplicar from "./multiplicar.js";
import porcentagem from "./porcentagem.js";
let resultado = parseFloat(prompt("Digite o primeiro número: "));

if (Number.isNaN(resultado)) {
  console.log("Número inválido.");
} else {


let resultado = 0;
let continuar = "s";
}
while (continuar.toLowerCase() === "s") {
  let num = parseFloat(prompt("digite um numero"));
  let operacao = prompt("digite qual a operacao vc deseja (+,-,*,/,%)");

  if (Number.isNaN(num)) {
    console.log("Número inválido.");
    continue;
  }

    switch (operacao) {
    case "+":
      resultado = somar(resultado, num);
      console.log("resultado" + resultado);
      break;
    case "-":
      resultado = subtrair(resultado, num);
      console.log("resultado" + resultado);
      break;
    case "*":
      resultado = multiplicar(resultado, num);
      console.log("resultado" + resultado);
      break;
    case "/":
      resultado = divisao(resultado, num);
      console.log("resultado" + resultado);
      break;
    case "%":
      resultado = porcentagem(resultado, num);
      console.log("resultado" + resultado);
      break;
    default:
      console.log("Erro");
      break;
    continuar = prompt("Deseja fazer outra operação? s/n: ");
  }
 }
