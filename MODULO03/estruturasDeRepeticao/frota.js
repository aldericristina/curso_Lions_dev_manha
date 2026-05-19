const prompt = require("prompt-sync")();
let caminhao = [];// inicializei o caminhao como array vazio
let quantidadeDeCaixas = 0;// inicializei uma variavel antes de jogar no while
let pesoTotal = 0;//inicialiei uma variavel antes de jogar no while
let peso;//inicialiei uma variavel antes de jogar no while
while (pesoTotal < 1000) {// este while usa como condicao de parada o pesoTotal maior que 1000
  peso = parseFloat(prompt("digite o peso de cada caixa"));//manipulei uam variavel que usei dentro do while 
  pesoTotal += peso;
  if (pesoTotal > 1000) {//if e else sao complementares 
    console.log("Capacidade máxima atingida! Caixa não adicionada.");//
    break;
    console.log("Alerta carga maxima atingida");
  } else {//
    quantidadeDeCaixas += 1;
    caminhao.push(peso);
  }
}
pesoTotal += peso;
console.log("Resumo:" + caminhao);//mandei primntar o array inteiro, nao usei aspas
console.log("Quantidade de caixas:" + quantidadeDeCaixas);
