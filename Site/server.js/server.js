const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/salvar-dados', (req, res) => {
  const { nome, cpf, telefone, dataNascimento } = req.body;

  const filePath = path.join(__dirname, 'dados.json');

  fs.readFile(filePath, 'utf8', (err, content) => {
    let registros = [];
    if (!err && content) registros = JSON.parse(content);

    registros.push({ nome, cpf, telefone, dataNascimento });
    registros.sort((a, b) => a.nome.localeCompare(b.nome));

    fs.writeFile(filePath, JSON.stringify(registros, null, 2), err => {
      if (err) return res.status(500).send('Erro ao salvar os dados.');
      res.status(200).send('Dados salvos com sucesso.');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
