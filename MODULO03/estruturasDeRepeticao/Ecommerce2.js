// Simulação de entrada (em ambiente real, use prompt-sync ou readline)
const prompt = require("prompt-sync")();

// Lista de carrinhos
const carrinhos = [
  {
    cliente: "João",
    produtos: [
      { nome: "Arroz", preco: 20 },
      { nome: "Feijão", preco: 10 }
    ]
  },
  {
    cliente: "Maria",
    produtos: [
      { nome: "Leite", preco: 8 },
      { nome: "Pão", preco: 12 }
    ]
  }
];

const clientesPagos = [];

// Iterar sobre os carrinhos
carrinhos.forEach(carrinho => {
  console.log(`\nCliente: ${carrinho.cliente}`);

  // 1. Calcular total da compra
  let total = 0;
  carrinho.produtos.forEach(produto => {
    total += produto.preco;
  });

  console.log(`Total da compra: R$ ${total.toFixed(2)}`);

  // 2. Receber pagamentos até atingir o total
  let totalPago = 0;

  while (totalPago < total) {
    let valor = parseFloat(prompt("Informe o valor recebido: R$ "));
    
    if (isNaN(valor) || valor <= 0) {
      console.log("Valor inválido. Tente novamente.");
      continue;
    }

    totalPago += valor;
    console.log(`Total pago até agora: R$ ${totalPago.toFixed(2)}`);
  }

  // 3. Calcular troco, se houver
  if (totalPago > total) {
    let troco = totalPago - total;
    console.log(`Troco: R$ ${troco.toFixed(2)}`);
  } else {
    console.log("Pagamento exato recebido.");
  }

  // Registrar cliente pago
  clientesPagos.push(carrinho.cliente);
});

// 4. Relatório final
console.log("\n=== RELATÓRIO FINAL ===");
console.log("Clientes com pagamento concluído:");
clientesPagos.forEach(nome => {
  console.log(`- ${nome}`);
});
