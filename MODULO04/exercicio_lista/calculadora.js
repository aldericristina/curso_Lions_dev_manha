const prompt = require("prompt-sync")();

  let bonus = 0;
  function funcionario(salario, nivel) {
  console.log("Seu salário é:", salario);

  switch (nivel) {
  case 'estagiario':
    console.log("Seu cargo é: Estagiário");
     bonus = salario * 0.10;
    break;
  case 'junior':
    console.log("Seu cargo é:Junior");
     bonus = salario * 0.15;
    break;
  case 'pleno':
    console.log("Seu cargo: Pleno");
     bonus = salario * 0.20;
    break;
   default:
      bonus = 0;
  }

  return bonus;
  }

let salario = Number(prompt("Informe seu salário: "));
let nivel = prompt("Informe seu nível (estagiario, junior, pleno): ").toLowerCase();//transformar a resposta em minusculo independente de como sera a resposta 


let resultado = funcionario(salario, nivel);

// saída
console.log("O valor do bônus é: R$", resultado.toFixed(2));// fixar o resultado em duas casas decimais depois do ponto