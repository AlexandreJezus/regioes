const prompt = require("prompt-sync")();

const regioes = [];

const modelo = () => {
  let pais = {}; // não posso adicionar atributos em algo indefinido

  while (true) {
    pais.nome = prompt("Qual é o nome do país? ");
    if (nomeInvalido(pais.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    estado.nome = prompt("Qual é o nome do estado? ");
    if (nomeInvalido(estado.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    cidade.nome = prompt("Qual é o nome da cidade? ");
    if (nomeInvalido(cidade.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
};

module.exports = {
  modelo,
};
