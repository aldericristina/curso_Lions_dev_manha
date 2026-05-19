import atualizar_baralho from "./atualizar_UPDATE/atualizar_baralhos.js";
import baralhos from "./dados/baralho.js";
import flashcards from "./dados/flashcards.js";
import atualizar_flashcards from "./atualizar_UPDATE/atualizar_flashcard.js";

let baralhos1 = { id: 1, titulo: "utrage" };
let baralho2 = { id: 9, titulo: "tica" };
console.log(flashcards);

atualizar_flashcards("TESTE pergunta", "resposta teste", 1);
console.log(flashcards);

atualizar_flashcards("pergunta teste", "resposta teste", 45);
console.log(flashcards);

