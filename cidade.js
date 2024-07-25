const prompt = require("prompt-sync")();

const regioes = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= regioes.length || isNaN(indice);

const modelo = () => {
  let pais = {};

  while (true) {
    pais.cidade = prompt("Qual é o nome da cidade? ");
    if (nomeInvalido(pais.cidade)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
  return pais;
};

const criar = () => {
  const pais = modelo();

  regioes.push(pais);

  console.log("Cidade adicionada com sucesso.");
};

const listagem = () =>
  regioes.forEach((pais, i) => {
    console.log(`${i + 1} - ${pais.nome} - ${pais.estado} - ${pais.cidade}`);
  });

const atualizar = () => {
  while (true) {
    if (regioes.length == 0) {
      console.log("Lista de cidades esta vazia.");
      break;
    }

    listagem();

    const indice =
      lerIndice("Qual o indice de cidades que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      const pais = modelo();
      regioes[indice] = pais;
      break;
    }
  }
};

const remover = () => {
  while (true) {
    listagem();

    const indice =
      lerIndice("Qual é o indice de cidade que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      regioes.forEach((pais) => {
        if (pais.sequencia == indice) {
          pais.sequencia = -1;
        }
      });
      regioes.splice(indice, 1);
      console.log("Cidade removida com sucesso");
      break;
    }
  }
};

module.exports = {
  modelo,
  criar,
  listagem,
  atualizar,
  remover,
};
