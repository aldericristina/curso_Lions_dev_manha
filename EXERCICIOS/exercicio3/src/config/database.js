import mongoose from "mongoose";    

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro de conexão:"));

db.once("open", function() {
    console.log("Conexão bem-sucedida ao MongoDB!");
});

export default conectarBanco;

