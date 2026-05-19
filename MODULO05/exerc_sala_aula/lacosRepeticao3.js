const prompt = require("prompt-sync")();
let temperaturaAgua = [90];

while (temperaturaAgua[0] < 100) {
  (console.log(`A temperatura está em ${temperaturaAgua[0]} graus. Aquecendo...`,),
    (temperaturaAgua[0] = temperaturaAgua[0] + 2));
}
