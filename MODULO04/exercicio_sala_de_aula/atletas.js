const prompt = require("prompt-sync")();
let atleta = {
  nome: prompt("Digite o nome do atleta"),
  pesoAtual: prompt("Digite o peso atual"),
  meta: prompt("Digite a meta:Emagrecimento ou Performance"),
  distancia: [],
};
atleta.distancia[0] = parseFloat(
  prompt("qual foi a primeira distancia que vc fez"),
);
atleta.distancia[1] = parseFloat(
  promptrompt("qual foi a segunda distancia que vc fez"),
);
atleta.distancia[2] = parseFloat(
  prompt("qual foi a terceira distancia que vc fez"),
);
atleta.distancia[3] = parseFloat(
  prompt("qual foi a quarta distancia que vc fez"),
);

let soma = atleta.distancia[1] + atleta.distancia[2] + atleta.distancia[3];
let media = soma / 3;

if (media > 20 && atleta.meta === "Emagrecimento") {
  atleta.pesoAtual -= 1;
  atleta.selo = "Meta Atingida";
} else if (
  atleta.meta === "Performance" &&
  atleta.distancia[3] > atleta.distancia[2]
) {
  atleta.selo = "Novo Recorde Pessoal";
}
(console.log("Perfil do atleta:"),
  console.log("Nome:" + atleta.nome),
  console.log("Peso:" + atleta.pesoAtual),
  console.log("Meta:" + atleta.meta),
  console.log("Distâncias:" + atleta.distancias),
  console.log("Média das últimas 3 corridas:" + media),
  console.log("selo" + atleta.selo));
