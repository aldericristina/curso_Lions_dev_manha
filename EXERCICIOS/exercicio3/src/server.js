import express from "express";
import dotenv from "dotenv";
import conectarDB from "./db.js";
import Pedido from "./models/matriculas.js";

dotenv.config({ path: "../.env" });
const app = express();

app.use(express.json());
app.post("/pedidos", async (req, res) => {

    try {
        const { nome, curso } = req.body;
        const pedido = new Pedido({ nome, curso });
        await pedido.save();
        res.status(201).json(pedido);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar pedido." });
    }
});

const PORT = process.env.PORT || 3000;

conectarDB().then(() => {

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}.`);
    });
}).catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error.message);
    process.exit(1);
});




