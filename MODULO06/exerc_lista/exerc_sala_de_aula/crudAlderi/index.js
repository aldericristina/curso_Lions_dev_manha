import express from "express";
const app = express ();
const port= 3000;

app.use(express.json());

import {
    criarBaralho,
    listarBaralhos,
    atualizarBaralho,
    removerBaralho
} from "./servicos/baralhoServico.js"

import {
    criarFlashcard,
    listarFlashcards,
    listarPorBaralho,
    atualizarFlashcard,
    removerFlashcard,
    buscarPorPergunta
} from "./servicos/flashcardServico.js"
import adicionarBaralho from "../adicionar_baralho.js";
import { flashcards } from "../data.js";

app.get ("/", (req,res) => {
 res.send ("API baralhos funcionando!");
});

app.post ("/baralho", (req,res) => {
const titulo= req.body.titulo;
const resultado= adicionarBaralho (titulo);
const info= resultado.info;
const error= resultado.error;

if (error){
    return res.status(400).send ({message:error})
}
res.status(201).send ({ message:" Baralho criado"})
})

app.get ("/baralho",(req, res) => {
    const info= listarBaralhos ();
    res.status(200).send(info);
})
app.put ("/baralho/:id", (req,res)=>{
    const id= req.params.id;
    const titulo= req.body.titulo;

    const resultado= atualizarBaralho (id, titulo);
    const info= resultado.info;
    const error= resultado.error;
if (error){
    return res.status(404).send ({message: error});
}
res.status(200).send({message:"baralho atualizado"});
})

app.delete ("/baralho/: id", (req, res) => {
const id = req.params.id;

const resultado= removerBaralho (id);
const info= resultado.info;
const error= resultado.error;

if (error) {
    return res.status (404).send ({massage:error})
}
res.status (200).send ({message: "Baralho deletado"});
})
/*============================================*/
app.post("flashcards", (req, res) =>){
    const pergunta= req.body.pergunta;
    const resposta= req.body.resposta;
    const idBaralho= req.body.idBaralho;

    const resultado= adicionarFlashcard (pergunta,resposta, parseInt (idBaralho));
    const info= resultado.info;
    const error= resultado.error;
if (error){
    return res.status (404).send ({ message: error});
    }
    res.status (201).send({ message: "Flashcard criado com sucesso!", flashcards: info})};


/*
function menu() {
    let opcao

    do {
        console.log("\n=== MENU FLASHCARDS ===")
        console.log("1 - Criar Baralho")
        console.log("2 - Listar Baralhos")
        console.log("3 - Atualizar Baralho")
        console.log("4 - Remover Baralho")

        console.log("5 - Criar Flashcard")
        console.log("6 - Listar Flashcards")
        console.log("7 - Listar Flashcards por Baralho")
        console.log("8 - Atualizar Flashcard")
        console.log("9 - Remover Flashcard")

        console.log("10 - Buscar por Pergunta")

        console.log("0 - Sair")

        opcao = prompt("Escolha uma opção: ")

        switch (opcao) {

        case "1": {
            const titulo = prompt("Título do baralho: ")

            if (!textoValido(titulo)) {
                console.log("Erro: título inválido")
                break
            }

            const novo = criarBaralho(titulo)
            console.log("Criado:", novo)
            break
        }

        case "2":
            console.log(listarBaralhos())
            break

        case "3": {
            const id = Number(prompt("ID do baralho: "))
            const titulo = prompt("Novo título: ")

            if (!numeroValido(id) || !textoValido(titulo)) {
                console.log("Erro: dados inválidos")
                break
            }

            const atualizado = atualizarBaralho(id, titulo)
            console.log(atualizado || "Baralho não encontrado")
            break
        }

        case "4": {
            const id = Number(prompt("ID do baralho: "))

            if (!numeroValido(id)) {
                console.log("Erro: ID inválido")
                break
            }

            const removido = removerBaralho(id)
            console.log(removido ? "Removido com sucesso" : "Não encontrado")
            break
        }

        case "5": {
            const pergunta = prompt("Pergunta: ")
            const resposta = prompt("Resposta: ")
            const idBaralho = Number(prompt("ID do baralho: "))

            if (!textoValido(pergunta) || !textoValido(resposta) || !numeroValido(idBaralho)) {
                console.log("Erro: dados inválidos")
                break
            }

            const novo = criarFlashcard(pergunta, resposta, idBaralho)
            console.log(novo || "Erro ao criar (baralho pode não existir)")
            break
        }

        case "6": {
            const lista = listarFlashcards()

            if (lista.length === 0) {
                console.log("Nenhum flashcard encontrado")
            } else {
                console.log(lista)
            }

            break
        }

        case "7": {
            const id = Number(prompt("ID do baralho: "))

            if (!numeroValido(id)) {
                console.log("Erro: ID inválido")
                break
            }

            const resultados = listarPorBaralho(id)

            if (resultados.length === 0) {
                console.log("Não encontrado")
            } else {
                console.log("\nFlashcards encontrados:")
                resultados.forEach(f => {
                    console.log(`ID: ${f.id}`)
                    console.log(`Pergunta: ${f.pergunta}`)
                    console.log(`Resposta: ${f.resposta}`)
                    console.log("-----")
                })
            }

            break
        }

        case "8": {
            const id = Number(prompt("ID do flashcard: "))
            const pergunta = prompt("Nova pergunta: ")
            const resposta = prompt("Nova resposta: ")

            if (!numeroValido(id) || !textoValido(pergunta) || !textoValido(resposta)) {
                console.log("Erro: dados inválidos")
                break
            }

            const atualizado = atualizarFlashcard(id, pergunta, resposta)
            console.log(atualizado || "Não encontrado")
            break
        }

        case "9": {
            const id = Number(prompt("ID do flashcard: "))

            if (!numeroValido(id)) {
                console.log("Erro: ID inválido")
                break
            }

            const removido = removerFlashcard(id)
            console.log(removido ? "Removido" : "Não encontrado")
            break
        }

        case "10": {
            const texto = prompt("Buscar pergunta: ")

            if (!textoValido(texto)) {
                console.log("Erro: busca inválida")
                break
            }

            const resultados = buscarPorPergunta(texto)

            if (resultados.length === 0) {
                console.log("Não encontrado")
            } else {
                console.log(resultados)
            }

            break
        }

        case "0":
            console.log("Saindo...")
            break

        default:
            console.log("Opção inválida")
        }

    } while (opcao !== "0")
}

// função auxiliar pra validar texto
function textoValido(texto) {
    return texto && texto.trim() !== ""
}

// função auxiliar pra validar número
function numeroValido(num) {
    return !isNaN(num) && num > 0
}

menu()*/

