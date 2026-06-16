import express from "express";
import dotenv from "dotenv";
import conectarDB from "./db.js";
import Pedido from "./models/matriculas.js";
import Matriculas from "./models/matriculas.js";

dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 3000;  
conectarDB();
app.use(express.json());

const maticula =    
{
nomeAluno: "Beatriz Lima",
idade: 17,
modalidade: "Funcional",
plano: "Trimestral",
dataMatricula: "2026-06-15"
}

app.get("/", (req, res) => {
    res.json({ message: "API rodando" });
});

app.get("/matriculas", async (req, res) => {
    try {
        const matriculas = await Matriculas.find();
        res.status(200).json({
            mensagem: "Todas as matriculas",
            matriculas,
        });
    } catch (erro) {
        res.status(500).json({
            mensagem: "Erro ao buscar matriculas",
            erro: erro.message
        });
     }
});
    
app.post("/matriculas", async (req, res) => {
    try {
        const { nomeAluno, idade, modalidade, plano, dataMatricula } = req.body;
        if (!nomeAluno || !idade || !modalidade || !plano || !dataMatricula) {
            return res.status(400).json({
                message: "nomeAluno, idade, modalidade, plano e dataMatricula são obrigatórios"
            });
        }
        const idadeNum = Number(idade);
        if (!Number.isFinite(idadeNum) || idadeNum <= 0) {
            return res.status(400).json({
                message: "idade deve ser um número maior que 0"
            });
        }
        const novaMatricula = new Matriculas({
            nomeAluno,
            idade: idadeNum,
            modalidade,
            plano,
            dataMatricula
        });
        const matriculaSalva = await novaMatricula.save();
        res.status(201).json({
            message: "Matricula criada com sucesso",
            matricula: matriculaSalva
        });
    }
        
    catch (erro) {
        res.status(500).json({
            message: "Erro ao criar matricula",
            erro: erro.message
        });
    }})
    app.delete("/matriculas/:id", async (req, res) => {
        try {
            const  id  = req.params.id;
            const matriculaDeletada = await Matriculas.findByIdAndDelete(id);
               if (!matriculaDeletada) {  
                return res.status(404).json({   
                    message: "Matricula não encontrada"
                });
            }
            res.status(200).json({
                message: "Matricula deletada com sucesso",
                maticulaatricula: matriculaDeletada
            });
        }   catch (erro) {  
            res.status(500).json({
                message: "Erro ao deletar matricula",
                erro: erro.message
            });
        }                               
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

}); 

