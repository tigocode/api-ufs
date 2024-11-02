const express = require('express');
const app = express();
const {  buscarUF, buscarUFPorNome, buscarUFPorID} = require('./service/servicos');

app.get('/ufs', (req, res) => {
  const nomeUF = req.query.busca;  
  const resultado = nomeUF ? buscarUFPorNome(nomeUF) : buscarUF();
  
  if(resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).json({messagem: 'Nenhuma UF encontrada'});
  }
});

app.get('/ufs/:iduf', (req, res) => {
  const uf = buscarUFPorID(req.params.iduf);

  if(uf) {
    res.json(uf);
  } else  if(isNaN(parseInt(req.params.iduf))) {    
    res.status(400).json({erro: 'Requisicao invalida!'});
  } else {
    res.status(404).json({erro: 'UF não localizada!'});
  }
});

app.listen(3000, () => {
  let data = new Date();

  console.log(`Servidor rodando na PORT 3000 e em execução desde: ${data.toLocaleString()}`);
});
