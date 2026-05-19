const prompt = require("prompt-sync")();

let livros = [
  { titulo: "Os 4 temperamentos", autor: "Dr. Italo Marsili", disponivel: true },
  { titulo: "A Viagem de Tobias", autor: "Rodrigo Ferreira", disponivel: true },
  { titulo: "Medico de Homens e Almas", autor: "Taylor Caldwell", disponivel: true }
];

function emprestarLivro(nomeDoLivro) {
  for (let i = 0; i < livros.length; i++) {

    if (livros[i].titulo.toLowerCase() === nomeDoLivro.toLowerCase()) {

      if (livros[i].disponivel) {
        livros[i].disponivel = false;
        return "Empréstimo realizado com sucesso!";
      } else {
        return "Livro já está emprestado."
      }}
    }
  return " Livro não encontrado.";
}
function listarLivros() {
  console.log("\n Lista de livros:");

  livros.forEach((livro, index) => {
    console.log(
      `${index + 1}. ${livro.titulo} - ${
        livro.disponivel ? "Disponível" : "Emprestado"}`
    );
  });
}
let opcao;
do {
  console.log("\n===== LIVRARIA VIRTUAL =====");
  console.log("1 - Emprestar livro");
  console.log("2 - Ver todos os livros");
  console.log("3 - Sair");

opcao = prompt("Escolha uma opção: ");
  switch (opcao) {
    case "1":
      let nomeLivro = prompt("Digite o nome do livro: ");
      console.log(emprestarLivro(nomeLivro));
      break;
    case "2":
      listarLivros();
      break;
    case "3":
      console.log("Encerrando o sistema...");
      break;
    default:
      console.log("Opção inválida.");
  }

} while (opcao !== "3");
