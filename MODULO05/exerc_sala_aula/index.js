import promptSync from "prompt-sync";
const prompt = promptSync(); // é sempre o main

// Importando nossos dados e funções
import { medicos } from "./dados.js";
import { pacientes } from "./dados.js";
import { consultas } from "./dados.js";
import listarConsulta from "./listarConsulta.js";
import adicionarConsulta from "./adicionarConsulta.js";
import atualizarConsulta from "./atualizarConsulta.js";
import cancelarConsulta from "./cancelarConsulta.js";

function mainMenu() {
  let opcao = 0;

  while (opcao != 5) {
    console.log("\n--- Menu  ---");
    console.log("1. Listar Consulta (READ)");
    console.log("2. Adicionar Consulta (CREATE)");
    console.log("3. Atualizar Consulta (UPDATE)");
    console.log("4. Remover Consulta (DELETE)");
    console.log("5. Sair");
    opcao = parseFloat(prompt("Digite sua opção: "));

    switch (opcao) {
      case 1:
        listarConsulta(consultas);
        console.table;

        break;

      case 2:
        adicionarConsulta(medicos, pacientes, consultas);
        console.table();
        break;

      case 3:
        atualizarConsulta();
        break;

      case 4:
        let id = parseInt(prompt("Qual id deseja remover: "));
        removerConsulta(consultas, id);
        break;

      case 5:
        console.log("Você saiu do programa.");
        break;
    }
  }
}
mainMenu();
