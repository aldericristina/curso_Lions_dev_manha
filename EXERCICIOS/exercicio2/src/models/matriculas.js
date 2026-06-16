import mongoose from "mongoose";

const matriculasSchema = new mongoose.Schema({
    nomeAluno: {
        type: String,
        required: [ true, " O Nome do Cliente é obrigatorio."],
    },
    idade: {
        type: Number,
        required: [true, "A idade é obrigatoria"], 
    },
    modalidade: {
        type: String,       
        required: [true, "A modalidade é obrigatoria"],
        enum: {
            values: ["Funcional", "Musculação", "Yoga", "Pilates"],
            message: "A modalidade deve ser Funcional, Musculação, Yoga ou Pilates"
        },
        trim: true  
    },
    plano: {
        type: String,
        required: [true, "O plano é obrigatorio"],      
        enum: {
            values: ["Mensal", "Trimestral", "Anual"],
            message: "O plano deve ser Mensal, Trimestral ou Anual"
        },
        trim: true  
    },       
    dataMatricula: {
        type: String,
        required: [true, "A data de matrícula é obrigatoria"],
    }
});
const Matriculas = mongoose.model("Matricula", matriculasSchema)

export default Matriculas;        

  
  
  
  
 