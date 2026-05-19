// aula sobre API REST com Node.js pag:37/38*/

import express from "express";

const router = express();
const port = 3000;

router.use (express.json ());
 
router.get (("/"), (req, res) => {
  res.send ("Desvolvendo alguma coisa na requesição")
});
router.listen((port), () => {
 console.log ("Servidor executando na porta " + port);
});
