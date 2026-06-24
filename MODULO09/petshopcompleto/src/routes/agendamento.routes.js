import AgendamentoController from "../controller/agendamento.controller.js";
import {Router}from "express";  

const router = Router();   

router.post("/api/agendamentos/cadastro", AgendamentoController.cadastrar);
router.get("/api/agendamentos/cadastro", AgendamentoController.buscarTodos);

export default router;  




