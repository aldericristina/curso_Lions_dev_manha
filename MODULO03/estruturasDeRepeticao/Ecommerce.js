const prompt = require("prompt-sync")();
let carrinhos = [
  { cliente: "Joao", produtos: [50.0, 120, 5, 15.0] },
  { cliente: "Maria", produtos: [200.0, 45.9] },
  { cliente: "Carlos", produtos: [10.0, 5.5, 32.0, 8.0] },
];
let clientesPagos = [];

(carrinhos.forEach((carrinho) => {
  console.log(`\nCliente: $(carrinho.cliente}`);
  let total = carrinho.produtos.reduce((acc, valor) => acc + valor, 0);
  console.log(`Total de compra: R$ $( total.toFixed(2)}`);

  let pago = 0;

  while (pago < total) {
    let valor = Number(prompt("Digite o valor recebido:"));
    pago += valor;
  }
  console.log("pagamento Concluido!");
  clientesPagos.push(carrinho.cliente);
}),
  console.log("Relatorio final"))
  console.log("clientes que pagaram:", clientesPagos);
