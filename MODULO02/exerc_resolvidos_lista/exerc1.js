const prompt = require('prompt-sync')();
let veiculoMotor= prompt("qual a  distancia percorrida em km");
let combustivelLitros= prompt("qual o consumo de combustivek em l")
let consumoCombustivel= veiculoMotor/combustivelLitros;
if (consumoCombustivel < 10 ) {
    console.log ("Alerta: Veículo consumindo muito combustível"); 
}else {
    console.log ("Consumo dentro do padrao operacional");}