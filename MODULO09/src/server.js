import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import Agendamento from "./models/agendamento.js";
import conectarDB from "./db.js"

dotenv.config({path:"../.env"}); 

conectarDB();
const router = express ();
const PORT = process.env.PORT;

router.use (express.json());
router.get(("/"),(req,res)=> {
    res.json ({message: "API rodando"})
});

router.post (("/agendamentos"), async(req,res)=>{
    try {
const {nomePet, especie, nomeDono, telefoneDono, serviço, data}= req.body;

let valor=0
if (especie == "cao"){
switch ( serviço){
case "Banho":
valor = 50
bresk
case  "Tosa":
valor = 60
break
case "Banho e Tosa":
valor =100
break 
}
}
if (especie == "gato"){
    switch ( serviço){
case "Banho":
valor =60
bresk
case  "Tosa":
valor =70
break
case "Banho e Tosa":
valor =110
break 
}
}
if (especie == "outro"){
switch ( serviço){
case "Banho":
valor =40
bresk
case  "Tosa":
valor =50
break
case "Banho e Tosa":
valor =80
break 
}
}

const novoAgendamento=new Agendamento ({
    nomePet,
    especie,
    nomeDono,
    telefoneDono,
    serviço,
    data,
    valor,
    })
await novoAgendamento.save();

res.status (201).json ({mensagem: "Agendamento criado com sucesso!", agendamento})
} catch (erro){
res.status (400).json ({mensagem:"Erro ao criar o agendamento" , erro: erro.message})
}
})

router.get("/agendamentos", async (req,res)=>{
 try{
    const agendamentos= await Agendamento.find()
    res.status (200).json({mensagem: "Todos os agendamentos ",agendamentos})
 }catch (erro){
     res.status (404).json({Mensagem:"Não foi encontrado nenhum agendamento",erro:erro.message})
 }
})
router.get(("/agendamento/busca"), async(req,res)=>{
try{
    const agendamento= await Agendamento.find ({nomePet: {$regex:nome, $options: "i"}})//regex busca por pedaço da string, options buscar e aceitar inteiro do nome 
    res.status (200).json({mensagem: "Busca efetuada com sucesso",agendamentos:Agendamentos})
}catch (erro){
    res.status (404).json({message: "erro", error:erro.messagr})
}
})

router.delete (("/agendamento /:id"), async (req,res)=>{
try{
    const id=req.params.id; //req.params pega o id que esta na URL
    const agendamentoDeletado= await Agendamento.findByIdAnddelete(id);
    if (!agendamentoDeletado){
        return res.status (404).json ({ mensagem:"Agendamento nao encontrado"})
}
    return res.status (200).json ({ mensagem: "Agendamento deletado com sucesso"})
}catch (erro){
    res.status (500).json({message: "erro do servidor", erro: erro.message})
    }
} )

router.patch (("/agendamento/:id"), async (req,res)=> {
try{
    const id= req.params.id;
    const { status }= req.body
    const agendamentoAtualizado = await Agendamento.findByIdAndUpdate (id, {status: status},{runValidators:true, new:true})
    if ( !agendamentoAtualizado){
    return res.status (404).json ({ messagem:"Agendamento não encontrado"})
}
    return res.status (200).json ({ mensagem: "Atualização realizada com sucesso"})
}catch (erro){
    res.status (500).json({message: "erro do servidor", erro: erro.message})
}
})

router.listen (PORT,()=>{
    console.log (`servidor rodando na porta ${PORT}`)
})