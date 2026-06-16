import express from "express";
import dotenv from "dotenv";
import conectarDB from "./db.js";
import Pedido from "./models/pedidos.js";

dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const preco = {
  salgado: 8,
  suco: 6,
  combo: 12,
  bolo: 5,
};

app.get("/", (req, res) => {
  res.json({ message: "API rodando" });
});

app.get("/pedidos", async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    res.status(200).json({
      mensagem: "Todos os pedidos",
      pedidos,
    });
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar pedidos",
      erro: erro.message,
    });
  }
});

app.post("/pedidos", async (req, res) => {
  try {
    const {
      nomeCliente,
      item,
      quantidade,
      formaPagamento,
      observacao,
    } = req.body;

    if (!nomeCliente || !item || quantidade == null) {
      return res.status(400).json({
        message: "nomeCliente, item e quantidade são obrigatórios",
      });
    }

    const quantidadeNum = Number(quantidade);

    if (!Number.isFinite(quantidadeNum) || quantidadeNum <= 0) {
      return res.status(400).json({
        message: "quantidade deve ser um número maior que 0",
      });
    }

    const valorUnitario = preco[item];

    if (!valorUnitario) {
      return res.status(400).json({
        message: "Item inválido",
      });
    }

    const valorTotal = valorUnitario * quantidadeNum;

    const novoPedido = await Pedido.create({
      nomeCliente,
      item,
      quantidade: quantidadeNum,
      formaPagamento,
      observacao,
      valorUnitario,
      valorTotal,
    });

    return res.status(201).json({
      message: "Pedido criado com sucesso!",
      pedido: novoPedido,
    });
  } catch (erro) {
    return res.status(500).json({
      message: "Não foi possível criar o pedido",
      erro: erro.message,
    });
  }
});

app.get("/pedidos/busca", async (req, res) => {
  try {
    const nome = req.query.nome || "";

    const pedidos = await Pedido.find({
      nomeCliente: { $regex: nome, $options: "i" },
    });

    return res.status(200).json({
      message: "Busca efetuada com sucesso",
      pedidos,
    });
  } catch (erro) {
    return res.status(500).json({
      message: "Erro na busca",
      erro: erro.message,
    });
  }
});

app.delete("/pedidos/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const pedidoDeletado = await Pedido.findByIdAndDelete(id);

    if (!pedidoDeletado) {
      return res.status(404).json({
        mensagem: "Pedido não encontrado",
      });
    }

    return res.status(200).json({
      mensagem: "Pedido deletado com sucesso",
    });
  } catch (erro) {
    res.status(500).json({
      message: "Erro do servidor",
      erro: erro.message,
    });
  }
});

app.patch("/pedidos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { status } = req.body;

    const pedidoAtualizado = await Pedido.findByIdAndUpdate(
      id,
      { status },
      { runValidators: true, new: true }
    );

    if (!pedidoAtualizado) {
      return res.status(404).json({
        mensagem: "Pedido não encontrado",
      });
    }

    return res.status(200).json({
      mensagem: "Atualização realizada com sucesso",
      pedido: pedidoAtualizado,
    });
  } catch (erro) {
    res.status(500).json({
      message: "Erro do servidor",
      erro: erro.message,
    });
  }
});
conectarDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((erro) => {
    console.error("Erro ao conectar ao banco:", erro.message);
  });
