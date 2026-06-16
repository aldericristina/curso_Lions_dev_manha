import express from "express";
import dotenv from "dotenv";
import conectarDB from "./db.js";
import Pedido from "./models/matriculas.js";

dotenv.config({ path: "../.env" });
