const prompt = require('prompt-sync')();
let gostaDecafe = prompt("Voce gosta de cafe?");
let valorBoleano = (gostaDecafe === "true");

if (valorBoleano == true) {
    console.log ('Se voce gosta de café é True')
} else {
    console.log ('Se voce nao gosta de cafe é False')
}
