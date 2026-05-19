const prompt = require("prompt-sync")();
let pasgInt= {
  nome:prompt("Digite seu nome"),
  Nacionalidade:prompt("Digite sua nacionalidade"),
  passaporte: prompt("Digite se apresentou passaporte, sim/nao"),
  visto: prompt ("Digite se apresentou visto,sim/nao"),
  certVacina: prompt ("Diite se apresentou certidao de vacina,sim/nao"),

  listDoc:[pasgInt.passaporte,pasgInt.visto,pasgInt.certVacina],
}
if (pasgInt.passaporte=="sim") {
  pasgInt.passaporte=true
}
else {
  pasgInt.passaporte=false
}

  if (pasgInt.Nacionalidade!="brasileiro") {
      if (pasgInt.visto=="sim"&& pasgInt.certVacina=="sim" ){
        pasgInt.entradaPermitida=true
      } else {
     pasgInt.entradaPermitida=false
      }
  } else {
    if (pasgInt.passaporte=="sim"){
          pasgInt.entradaPermitida=true
    }else{
     pasgInt.entradaPermitida=false
  }}
 
console.log= (pasgInt);
