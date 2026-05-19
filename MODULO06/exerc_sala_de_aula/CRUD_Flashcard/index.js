import PromptSync from "prompt-sync";
const prompt= PromptSync ();

import flashcard from "../dados/flashcard.js";
import baralho from "../dados/baralho.js"
import listar_FC_por_baralho from "../listar_READ/listar_FC_por_baralho.js";

listarFlashcard(flashcard)
listarbaralho(baralho)
listar_FC_por_baralho (baralho, flashcard)
