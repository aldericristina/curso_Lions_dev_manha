import baralhos from "../dados/baralho.js";
import flashcards from "../dados/flashcards.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//FC = flashcard
function listar_FC_por_baralho(baralhos, flashcards) {
  let escolherBaralho;
  escolherBaralho = parseInt(prompt("Escolha o id do baralho"));
 for (let i = 0; i < flashcards.length; i++) {
  if (flashcards[i].idBaralho==escolherBaralho) {
    console.log(flashcards[i]);
       
  }}
  
 } 

listar_FC_por_baralho(baralhos, flashcards);

export default listar_FC_por_baralho;
