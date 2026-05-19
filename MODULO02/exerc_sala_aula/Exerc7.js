const prompt = require('prompt-sync')();
let numeroDigitado = parseInt(prompt('digite um numero para verificar se ele é par '));

    
    let resto=numeroDigitado % 2;
    if (resto == 0){ 
        console.log ("numeroDigitado é par");
    } 
    else {
        console.log ("numeroDigitado é impar");
    }
        
   


