const prompt = require("prompt-sync")();

let quantidadeDePessoas = parseFloat(prompt("Digite a quantidade de pessoas"));
let consumo = parseFloat(prompt("Digite o valor total de consumo"));
let taxaServico = consumo*(10/100)
let valorPessoa 
if (quantidadeDePessoas <0 ){
  console.log (`Erro`)  
}else {
    consumo=consumo+taxaServico
    valorPessoa=consumo/quantidadeDePessoas
    console.log (`Valor total:${consumo}\n Valor por pessoa:${valorPessoa}\nValor da taxa de servico: ${taxaServico}`)
}
