const express = require('express');
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log('Connexion à MongoDB échouée !', error.message));

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Le serveur fonctionne !' });
});

module.exports = app;
