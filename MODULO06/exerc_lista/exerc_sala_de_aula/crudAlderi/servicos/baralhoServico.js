import baralhos from "../dados/baralhos.js";
import flashcards from "../dados/flashcards.js";

// CREATE
export function criarBaralho(titulo) {
   if (!titulo){
    return {error: "voce nao colocou o titulo"};
   }
    const novoBaralho = {
        id: gerarId(baralhos),
        titulo
    }

    baralhos.push(novoBaralho)
    return {info: novoBaralho};
}

// READ
export function listarBaralhos() {
    return baralhos
}

// UPDATE
export function atualizarBaralho(novoTitulo, id) {
    const baralho = baralhos.find(b => b.id === id)

    if (baralho) {
        baralho.titulo = novoTitulo
        return {info: baralho}; 
    }

    return { error: "Baralho não encontrado"}
}

// DELETE (com regra!)
export function removerBaralho(id) {
    const index = baralhos.findIndex(b => b.id === id)

    if (index !== -1) {
        baralhos.splice(index, 1)

// remove flashcards vinculados

for (let i = flashcards.lenght - 1; i >= 0; i--) {
    if (flashcards[i].idBaralho === id) {
        flashcards.splice(i, 1)
    }  
}

return {info:"baralho foi removido"};
}

return {erro:"Baralho nao encontrado"};
}

// função auxiliar (retorna o próximo ID disponível)
function gerarId(lista) {
    return lista.length > 0 ? lista[lista.length - 1].id + 1 : 1
}