const prompt = require("prompt-sync")();
let servidor = {
  nome: "Servidor Principal AWS",
  capacidadeMaximaGigabytes: 500,
  sitesHospedados: [
    {
      dominio: "meusite.com",
      tamanhoOcupadoGB: 100
    }
  ]
};
let novoDominio = prompt("Digite o domínio do novo site: ");
let novoTamanho = Number(prompt("Digite o tamanho do site (GB): "));

let tamanhoAtual = servidor.sitesHospedados.reduce((total, site) => {
  return total + site.tamanhoOcupadoGB;
}, 0);

let totalComNovo = tamanhoAtual + novoTamanho;

if (totalComNovo <= servidor.capacidadeMaximaGigabytes) {
  servidor.sitesHospedados.push({
    dominio: novoDominio,
    tamanhoOcupadoGB: novoTamanho
  });

  console.log("\n✅ Upload Concluído! Sistema Operacional");
} else {
  servidor.alertaSobrecarga = true;
  console.log("\n❌ Falha: Falta de Espaço Físico. Cancele o deploy");
}

console.log("\n===== STATUS DO SERVIDOR =====");
console.log(JSON.stringify(servidor, null, 2));