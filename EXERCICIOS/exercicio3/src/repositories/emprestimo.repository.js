import Emprestimo from "../models/emprestimo.model.js";

async function criar(emprestimoLivro) {
    return Emprestimo.create(emprestimoLivro);  
}
/*
async function buscarPorId(id) {
    return Emprestimo.findById(id);
}       
   
async function listarPorDono(donoId) {
    return Emprestimo.find({ dono: donoId }).sort({ createdAt: -1 });
}   
     
async function atualizarPorIdDoDono(idLivro,idDoDono, dadosAtualizados) {
    return Livro.findOneAndUpdate({ _id: idLivro, dono: idDoDono }, dadosAtualizados, {
        new: true,
        runValidators: true,
    });
}
async function deletePorId(id) {
    return Livro.findByIdAndDelete(id);
}*/
const LivroRepository = {
    criar,
    /*buscarPorId,    
    listarPorDono,
    atualizarPorIdDoDono,
    deletePorId,*/
};
export default LivroRepository; 