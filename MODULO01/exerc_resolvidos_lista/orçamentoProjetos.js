const prompt = require("prompt-sync")();
let filaProjetos = [];
let orcamento = {};
filaProjetos[0] = orcamento;
orcamento.nomeEmpresa = prompt("Informe o nome da empresa");
orcamento.Valorprojeto = parseFloat(
  prompt(`Informe o valor estimado do projeto`),
);
let urgente = prompt("Digite se e urgente");
if (urgente == "sim" && orcamento.Valorprojeto > 3000.0) {
  orcamento.Valorprojeto = orcamento.Valorprojeto * 1.15;
} else {
  console.log(filaProjetos[0].nomeEmpresa + filaProjetos[0].Valorprojeto);
}
