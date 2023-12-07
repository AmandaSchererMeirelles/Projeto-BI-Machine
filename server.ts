import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

const db = new sqlite3.Database(path.join(__dirname, 'data.db'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/submitForm', (req, res) => {
  const { nome, email } = req.body;

  // Insira os dados no banco de dados
  db.run('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], (err) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).json({ success: false, error: 'Erro interno do servidor' });
    }

    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${5174}`);
});
