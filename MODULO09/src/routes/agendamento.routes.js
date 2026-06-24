import AgendamentoController from "../controller/agendamento.controller.js";
import {Router}from "express";  

const router = Router();   

router.post("/api/agendamentos/cadastro", AgendamentoController.cadastrar);

export default router;  




