import mongoose from "mongoose";  

async function conectarBanco() {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
        throw new Error("MONGO_URI não está definido no arquivo .env");
    }
    await mongoose.connect(MONGO_URI)
    console.log("Banco de dados conectado com sucesso");  
}


export default conectarBanco;

