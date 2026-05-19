const prompt = require("prompt-sync")();
let usuario= prompt("digite seu nome");
let cracha= parseFloat(prompt("digite o codigo do seu cracha"))
function acesso(usuario, cracha) {// o usuario e o cracha passados por parametro nao sao as mesmas variaveis que eu criei acima 
 if(usuario.length >=5 && cracha >=1000) {
  return true
} else{
  return false
}
}
let control = acesso (usuario, cracha) // usuario e chacha da 1 variavel
if (control==true) {
  console.log ("Acesso concedido")
}else {
  console.log ("acesso negado")
}


