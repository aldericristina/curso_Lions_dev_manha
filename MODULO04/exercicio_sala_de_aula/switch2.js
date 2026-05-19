const prompt = require("prompt-sync")();
let nota = parseInt (prompt ("Digite sua nota:"))
 nota= prompt ("Voce foi aprovado");
  switch (true) {
  case nota: (nota>=90 && nota<= 100);
  console.log ("nota A");
  break;
  case nota: (nota>=80 && nota<= 89);
  console.log ("nota B");
  break
  case nota: (nota>=70 && nota<=79),
  console.log ("nota C");
  break;
  case nota: (nota>=60 && nota<=69),
  console.log ("nota D")
  break;
  case nota: (nota>=0 && nota<=59),
  console.log ("nota F");
    break;
    default:
    console.log("Nota inválida");
}
  
