const colecaoUf = require('../data/dados');

const buscarUF = () => {
  return colecaoUf;
}

const buscarUFPorNome = (nomeUF) => {
  return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUF.toLowerCase()));
}

const buscarUFPorID = (id) => {
  const idUf = parseInt(id);
  return colecaoUf.find(uf => uf.id === idUf);
}

module.exports = {
  buscarUF,
  buscarUFPorNome,
  buscarUFPorID
}
