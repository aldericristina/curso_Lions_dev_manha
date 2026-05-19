import PromptSync from "prompt-sync";

import calcularMedia from "./media.js";
import calcularMediana from "./mediana.js";
import adicionarNumero from "./adicionarNumeros.js";
import removerNumeros from "./removerNumeros.js";
const prompt = PromptSync();
const numeros = [];

let opcao;

do {
  console.log("\n=== CALCULADORA ESTATÍSTICA ===");
  console.log("1. Adicionar números");
  console.log("2. Remover o último número");
  console.log("3. Calcular a Média");
  console.log("4. Calcular a Mediana");
  console.log("5. Mostrar numeros");
  console.log("0. Sair");

  opcao = parseFloat(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      let numero = parseFloat(prompt("diite um numero"));
      if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número válido.");
      } else {
        adicionarNumero(numero);
        console.log(`Número ${numero} adicionado com sucesso.`);
      }
      break;

    case 2: {
      removerNumeros();
      break;
    }

    case 3: {
      let media = calcularMedia(numeros);

      if (media === null) {
        console.log("A lista está vazia. Não é possível calcular a média.");
      } else {
        0;
        console.log(`Média da lista: ${media}`);
      }
      break;
    }

    case 4: {
      numeros.sort;
      let mediana = calcularMediana(numeros);

      if (mediana === null) {
        console.log("A lista está vazia. Não é possível calcular a mediana.");
      } else {
        console.log(`Mediana da lista: ${mediana}`);
      }
      break;
    }

    case 5:
      console.log("Lista atual:", numeros);
      break;

    case 0:
      console.log("Encerrando o programa...");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== 0);
