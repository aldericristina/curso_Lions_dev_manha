 import express from "express";

 const app = express();
 app.use(express.json());   

 app.get("/", (req, res) => {
     res.send("Bem-vindo à API de Pedidos!");
 });
export default app; 