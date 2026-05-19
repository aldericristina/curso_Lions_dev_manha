const prompt = require("prompt-sync")();
let estoque = [];

function cadastrarProduto() {
  let nome = prompt("Nome do produto: ");
  let quantidade = Number(prompt("Quantidade: "));
  let preco = Number(prompt("Preço: "));
  let categoria = prompt("Categoria: ");

  let produto = {
    nome: nome,
    quantidade: quantidade,
    preco: preco,
    categoria: categoria,
  };

  estoque.push(produto);
  console.log("Produto cadastrado com sucesso!");
}

function listarProdutos() {
  if (estoque.length === 0) {
    console.log("Estoque vazio.");
    return;
  }

  console.log("--- LISTA DE PRODUTOS ---");
  estoque.forEach((produto, indice) => {
    console.log(
      `${indice + 1}. Nome: ${produto.nome} | Quantidade: ${produto.quantidade} | Preço: R$ ${produto.preco.toFixed(2)} | Categoria: ${produto.categoria}`,
    );
  });
}

function adicionarEstoque() {
  let nome = prompt("Digite o nome do produto: ");
  let quantidadeAdicionar = Number(prompt("Quantidade para adicionar: "));

  let produto = estoque.find(
    (item) => item.nome.toLowerCase() === nome.toLowerCase(),
  );

  if (produto) {
    produto.quantidade += quantidadeAdicionar;
    console.log("Quantidade atualizada com sucesso!");
  } else {
    console.log("Produto não encontrado.");
  }
}

function removerEstoque() {
  let nome = prompt("Digite o nome do produto: ");
  let quantidadeRemover = Number(prompt("Quantidade para remover: "));

  let produto = estoque.find(
    (item) => item.nome.toLowerCase() === nome.toLowerCase(),
  );

  if (produto) {
    if (produto.quantidade >= quantidadeRemover) {
      produto.quantidade -= quantidadeRemover;
      console.log("Quantidade removida com sucesso!");
    } else {
      console.log("Estoque insuficiente.");
    }
  } else {
    console.log("Produto não encontrado.");
  }
}

function buscarProduto() {
  let nome = prompt("Digite o nome do produto: ");

  let produto = estoque.find(
    (item) => item.nome.toLowerCase() === nome.toLowerCase(),
  );

  if (produto) {
    console.log("Produto encontrado:");
    console.log(produto);
  } else {
    console.log("Produto não encontrado.");
  }
}

function estoqueBaixo() {
  console.log("--- PRODUTOS COM ESTOQUE BAIXO ---");
  let baixos = estoque.filter((produto) => produto.quantidade <= 5);

  if (baixos.length === 0) {
    console.log("Nenhum produto com estoque baixo.");
  } else {
    baixos.forEach((produto) => {
      console.log(`${produto.nome} - Quantidade: ${produto.quantidade}`);
    });
  }
}

let opcao;
do {
  console.log("=== MENU ESTOQUE ===");
  console.log("1 - Cadastrar produto");
  console.log("2 - Listar produtos");
  console.log("3 - Adicionar estoque");
  console.log("4 - Remover estoque");
  console.log("5 - Buscar produto");
  console.log("6 - Mostrar estoque baixo");
  console.log("0 - Sair");

  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case "1":
      cadastrarProduto();
      break;
    case "2":
      listarProdutos();
      break;
    case "3":
      adicionarEstoque();
      break;
    case "4":
      removerEstoque();
      break;
    case "5":
      buscarProduto();
      break;
    case "6":
      estoqueBaixo();
      break;
    case "0":
      console.log("Saindo do sistema...");
      break;
    default:
      console.log("Opção inválida.");
  }
} while (opcao !== "0");
