import mongoose from "mongoose";

const pedidosSchema =  new mongoose.Schema({
    nomeCliente:{
      type: String,
    required: [ true, " O Nome do Cliente é obrigatorio."],
    },
    item:{
      type: String,
      required: [true, "O tipo do salgado é obrigatorio"],
      enum: {
        values: [ "salgado","suco","combo","bolo"],
        message: "O item deve ser especificado"
      },
      trim:true
    },
    quantidade: {
     type: Number,
     required:[true, "A quantidade é obrigatoria"]
    },
    
    formaPagamento: {
        type: String,
        required: [true, "Aceitar apenas: Dinheiro, Pix ou cartão"],
        enum:{
        values:["dinheiro","pix","cartão"]
    },
        trim:true
    },
    Observação: {
    type: String,
     trim:true
    },
    
    valorUnitario: {
        type: Number,
    },
    
    valorTotal: {
        type: Number,
    },
    status: {
        type: String,
        default: "pendente", 
        enum: {
        values: ["pendente","pago","entregue"],
            message: "o status deve aceitar apenas pendente, pago ou entregue",
        }
     }
});
const Pedidos= mongoose.model("Pedido", pedidosSchema)

export default Pedidos;
   
