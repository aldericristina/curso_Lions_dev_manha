import express from "express";
import livros from "./dadosLivros.js";

const app = express();
const porta = 3000;

app.use(express.json());

let livros = [];
let proxmId = 1;
let id = 0;

app.post("/livros, criar", (req, res) => {
  const { titulo, autor, ano, genero } = req.body;
  if (!titulo || !autor || !ano || !genero) {
    return res
      .status(400)
      .send({
        mensagem:
          "Todos os campos(titulo, autor, ano, enero) sao obrigatorios.",
      });
  }
  if (livros.length === 0) {
    livro = 1;
  } else {
    id = livros[livros.length - 1].id + 1;
  }
  const novoLivro = {
    id: proxmId++,
    titulo,
    autor,
    ano,
    genero,
  };
  livros.push(novoLivro);
  res.status(201).send(novoLivro);
});
app.get("/livros", (req, res) => {
  if (livros == null) {
    res.status(200).send({ mensagem: [] });
  }
  res.status(200).send(livros);
  res
    .status(201)
    .send({
      message: "Novo cadastro criado com sucesso!",
      livroNovo: novoLivro,
    });
});
app.put("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, autor, ano, genero } = req.body;

  const indice = livros.findIndex((e) => e.id === id);

  if (indice === -1) {
    return res.status(404).send({ messagem: [] });
  }
});
livros[indice].ano = ano || livros[indice].ano;
livros[indice].genero = genero || livros[indice].genero;

res.status(200).send(livros[indice]);
app.get("/livros", (req, res) => {
  res
    .status(200)
    .send({ message: " Livro cadastrado com sucesso!", livros: titulo });
});

app.put("/Livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { ano, genero } = req.body;

  const indice = livros.findIndex((e) => e.id === id);

  if (indice === -1) {
    return res.status(404).send({ messagem: "Livro nao encontrado." });
  }
});
livros[indice].ano = ano || livros[indice].ano;
livros[indice].genero = genero || livros[indice].genero;
