import AgendamentoService from "../service/agendamento.service.js"; 

async   function cadastrar(req,res,next){ 
    try {
        const {nomePet, especie, nomeDono, telefoneDono, serviço, data}=req.body;
        const novoAgendamento=await AgendamentoService.cadastrar({
            nomePet,
            especie,        
            nomeDono,
            telefoneDono,
            serviço, 
            data,
        }); 
        res.status(201).json({mensagem: "Agendamento criado com sucesso!", agendamento: novoAgendamento})
    }   catch (erro){
        next(erro);
    }   res.status(401).json({mensagem: "Erro ao criar agendamento: $ {erro.message}"})
}
const AgendamentoController = {
    cadastrar,
}
export default AgendamentoController;
