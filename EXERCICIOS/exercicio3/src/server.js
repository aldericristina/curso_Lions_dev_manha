import dotenv from "dotenv";
import app from "./app.js";  

import conectarBanco from "./config/database.js";

dotenv.config();  
const PORT = process.env.PORT || 3000;  
try {
    await conectarBanco();
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}.`);
    });
} catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error.message);
    process.exit(1);
}   
