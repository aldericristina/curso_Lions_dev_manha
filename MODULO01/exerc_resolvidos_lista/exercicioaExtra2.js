const prompt = require("prompt-sync")();
let carrinhoOnline = {
  preco: [],
};
carrinhoOnline.nome = prompt("nome do cliente");
carrinhoOnline.assinatura = prompt("Qual assinatura:prime ou padrao?");
carrinhoOnline.preco[0] = parseFloat(prompt(`adicione o preco do produto1`));
carrinhoOnline.preco[1] = parseFloat(prompt(`adicione o preco do produto2`));
carrinhoOnline.preco[2] = parseFloat(prompt(`adicione o preco do produto3`));
let totalPreço =
  carrinhoOnline.preco[0] + carrinhoOnline.preco[1] + carrinhoOnline.preco[2];

if (totalPreço > 200 || carrinhoOnline.assinatura == "prime") {
  carrinhoOnline.selo = true;
  console.log("Fete gratis");
} else {
  totalPreço = totalPreço + 30;
  carrinhoOnline.selo = false;
}
console.log(carrinhoOnline);
