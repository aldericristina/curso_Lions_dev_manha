import express from "express";
import livros from "./dadosLivros.js";

const app = express();
const porta= 3000;

app.use (express.json ());
