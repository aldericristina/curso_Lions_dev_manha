const prompt = require("prompt-sync")();

const senhaCorreta = "9876";
let tentativa;

while (true) {
    tentativa = prompt("Digite a senha:");

    if (tentativa === senhaCorreta) {
        alert("Cofre liberado com sucesso");
        break;
    } else {
        alert("Acesso negado: Senha incorreta");
    }
}
