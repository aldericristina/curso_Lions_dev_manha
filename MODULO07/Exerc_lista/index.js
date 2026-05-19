import express from "express";
import estudantes from "./dadosEstudantes.js";

const app = express();
const porta= 3000;

app.use (express.json ());

let estudantes= [];
let proxmId= 1;
let id= 0;

app.post("/estudantes/criar",(req,res)=>{

const { nome, matricula, curso, ano }= req.body;

if (!nome|| !matricula || !curso || !ano){
  return res.status (400).send({ mensagem:"todos os campos(nome, matricula, curso, ano) sao obrigatorios."});
}
if (estudantes.length ===0) {
  id = 1
}else {
  id = estudantes [ estudantes.length - 1].id+1;
}
const novoEstudante= {
  id: proxmId++,
  id,
  nome,
  matricula,
  curso,
  ano,
};
estudantes.push(novoEstudante);
res.status(201).send(novoEstudante);
});

app.get("/estudantes", (req,res) => {
if (estudantes == null) {
    res.status (200).send ({ mensagem: "nao existen estudantes cadastrados"});
}
res.status (200).send(estudantes);
res.status (201).send( { message:"Estudante criado com sucesso!", estudanteNovo: novoEstudante});
});

app.put("/estudantes/:id", (req,res) => {
const id = parseInt(req.params.id);
const { nome, matricula, curso, ano}= req.body;

const indice = estudantes.findIndex((e) => e.id === id);

if (index === -1){
return res.status (404).send({ messagem: "Estudante não encontrado." });
}
});
  estudantes[index].nome = nome || estudantes[index].nome;
  estudantes[index].matricula = matricula || estudantes[index].matricula;
  estudantes[index].curso = curso || estudantes[index].curso;
  estudantes[index].ano = ano || estudantes[index].ano;

res.status(200).send(estudantes[index]);
app.get (("/estudantes"), (req,res) => {
res.status (200).send ({message:" Estudantes criados com sucesso!", alunos:estudantes} );
});

app.put(("/estudantes/:id"), (req, res) => {  
app.delete("/estudantes/:id", (req, res) => {
const { nome, matricula, curso, ano } = req.body;
const id = parseInt(req.params.id);
const index = estudantes.findIndex((estudantes) => estudantes.id === id);

if (index === -1) {
return res.status(404).send({ mensagem: "Estudante não encontrado." });
}
});
estudantes.splice(indice, 1);
res.status(200).send({ mensagem: "Estudante deletado com sucesso." });
});
  
app.get("/estudantes/busca", (req, res) =>{
const {nome, matricula, curso} = req.query;
  
let resultados = estudantes;
const index = estudantes.findIndex((estudante) => estudante.id === id);
  
  if (nome) {
   const resultados = resultados.filter((estudante) => estudante.nome.toLowerCase().includes(nome.toLowerCase()));
  }
  if (matricula) {
   const resultados = resultados.filter((estudante) => estudante.matricula.includes(matricula));
  }
  if (curso) {
    const resultados = resultados.filter((estudante) => estudante.curso.toLowerCase().includes(curso.toLowerCase()));
  }
  if(index === -1){
  return res.status(400).send({messae: "Termo de busca e obrigatorio!"});
  }

  res.status(200).send("Busca realizada com sucesso!", resultados);
  estudantes[index].nome = nome || estudantes[index].nome;
  estudantes[index].matricula = matricula || estudantes[index].matricula;
  estudantes[index].curso = curso || estudantes[index].curso;
  estudantes[index].ano = ano || estudantes[index].ano;
  
  res.status(200).send({ message: "Estudante atualizado com sucesso!", estudanteAtualizado: estudantes[index] });
  });

  app.listen(porta, () => {
  console.log(`Servidor de Estudantes rodando em http://localhost:${porta}`)
  });
 
