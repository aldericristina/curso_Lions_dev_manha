import express from "express";

const app = express();
const port = 3000;

router.use (express.json ());


router.post (("/livros"), (req, res) => {
  res.send ("")
});
router.listen((port), () => {
 console.log ("Servidor executando na porta " + port);
});
