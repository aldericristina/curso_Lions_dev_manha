import flashcards from "../dados/flashcards.js";

// CREATE
export function criarFlashcard(pergunta, resposta, idBaralho) {
    const novoFlashcard = {
        id: gerarId(flashcards),
        pergunta,
        resposta,
        idBaralho
    }
    flashcards.push(novoFlashcard)
    return novoFlashcard
}

// READ
export function listarFlashcards() {
    return flashcards
}

export function listarPorBaralho(idBaralho) {
    return flashcards.filter(f => f.idBaralho === idBaralho)
}

// UPDATE
export function atualizarFlashcard(id, pergunta, resposta) {
    const flashcard = flashcards.find(f => f.id === id)

    if (flashcard) {
        flashcard.pergunta = pergunta
        flashcard.resposta = resposta
        return flashcard
    }

    return null
}

// DELETE
export function removerFlashcard(id) {
    const index = flashcards.findIndex(f => f.id === id)

    if (index !== -1) {
        flashcards.splice(index, 1)
        return true
    }

    return false
}

// BUSCA
export function buscarPorPergunta(texto) {
    return flashcards.filter(f => f.pergunta.toLowerCase().includes(texto.toLowerCase())
    )
}

export function buscarPorBaralho(idBaralho) {
    return flashcards.filter(f => f.idBaralho === idBaralho)
}

// função auxiliar (retorna o próximo ID disponível)
function gerarId(lista) {
    return lista.length > 0 ? lista[lista.length - 1].id + 1 : 1
}