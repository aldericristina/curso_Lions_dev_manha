import Agendamento from "../models/agendamento.js";

async function criar (dadosAgendamento) {
    return Agendamento.create(dadosAgendamento);
}
 

async function buscarTodos() {
    return Agendamento.find();
}   

const  AgendamentoRepository = { criar, buscarTodos };
export default AgendamentoRepository;  
