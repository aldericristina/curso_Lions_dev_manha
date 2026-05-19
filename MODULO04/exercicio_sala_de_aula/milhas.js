const prompt = require("prompt-sync")();
let clienteVip = {
  nome: prompt ("digite seu nome"),
  historicoViagem: []
}
    let destino1= prompt ("informe seu Destino1");
    let milhas1= parseFloat (prompt ("informe quantidade de Milhas1"));
    let destino2= prompt ("Informe seu Destino 2");
    let milhas2= parseFloat (prompt("informe quantidade de Milhas2"));
    let destino3= prompt ("informe seu Destino3");
    let milhas3= parseFloat (prompt ("informe quantidade de Milhas3"));

if (totalMilhas) {
  totalMilhas = ( milhas1 + milhas2>5000);
} 
console.log ("Parabens Cliente recebeu upgrade para Platinum")

cliente.historicoViagem.push({ destino: destino3, milhas: milhas3 });
if (totalMilhas > 5000) {
  totalMilhas -= 5000;
  cliente.categoria = "Gold";
  }
  else {
  console.log("Parabéns! Você recebeu upgrade para Platinum!");
  let faltam = 5000 - totalMilhas;
  console.log("Faltam " + 5000 + " milhas para o upgrade.");
  console.log ("Cliente Gold");
}
clienteVip = {
 nome: "Marcos",
 historico: [
   { destino: "Rio", milhas: 2000 },
   { destino: "Salvador", milhas: 1500 },
   { destino: "São Paulo", milhas: 1800 }
 ]
}
