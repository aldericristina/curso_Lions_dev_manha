/*registrar(idDoUsuario, dados) : monta o objeto com usuario: idDoUsuario e cria.*/

import Emprestimo from "../models/emprestimo.model.js";
async function criar(emprestimoLivro) {
  const emprestimo = new Emprestimo(emprestimoLivro);
  return await emprestimo.save();
}           