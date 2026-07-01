import mongoose from "mongoose";        

const emprestimoSchema =  new mongoose.Schema({
    material: { type: mongoose.Schema.Types.ObjectId, ref: "Material", required: true },
    nomeAluno: { type: String, required: true, trim: true },
    turma: { type: String, required: true },
    dataEmprestimo: { type: String, required: true },
    diasEmprestimo: { type: Number, required: true, min: 1 },
    multaPrevista: { type: Number },
    status: { type: String, enum: ["Emprestado", "Devolvido", "Atrasado"], default: "Emprestado" },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true }
}, {
    timestamps: true
}); 
const Emprestimo = mongoose.model("Emprestimo", emprestimoSchema);
export default Emprestimo;  