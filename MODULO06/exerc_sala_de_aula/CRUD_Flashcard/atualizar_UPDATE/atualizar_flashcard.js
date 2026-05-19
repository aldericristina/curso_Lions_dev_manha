import PromptSync from "prompt-sync";
const prompt = PromptSync();
import flashcards from "../dados/flashcards.js";

function atualizar_flashcards(pergunta, resposta, id) {
  let indice = flashcards.find((flashcards) => flashcards.id === id);
  if (!indice) {
    console.log("o Flashcard nao foi encontrado");
  } else {
    indice.pergunta = pergunta;
    indice.resposta = resposta;
  }
}
export default atualizar_flashcards;
