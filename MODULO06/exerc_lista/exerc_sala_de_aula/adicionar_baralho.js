import { baralhos } from "./data.js";
import express from "express";
const app = express();
const port= 3000;

app.use (express.json ());
app.get (("/"), (req,resp) => {
res.send("API de Baralhos funcionando");
});

app.use(express.json());
app.get("/"), (req, res)  => {

if (!titulo) {
    return { error: "O título é obrigatório." };
  }
  }
  const novoBaralho = {
    id: novoId,
    titulo: titulo,
  };
  baralhos.push(novoBaralho);
  return { data: novoBaralho };


export default adicionarBaralho;
