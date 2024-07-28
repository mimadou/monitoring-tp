// src/index.js

const express = require('express');
const bodyParser = require('body-parser');
const { getComments, addComment, editComment, deleteComment } = require('./commentService');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/api/comments', (req, res) => {
  res.json(getComments());
});

app.post('/api/comments', (req, res) => {
  const newComment = addComment(req.body.text);
  res.json(newComment);
});

app.put('/api/comments/:id', (req, res) => {
  const updatedComment = editComment(parseInt(req.params.id), req.body.text);
  if (updatedComment) {
    res.json(updatedComment);
  } else {
    res.status(404).send('Commentaire non trouvé');
  }
});

app.delete('/api/comments/:id', (req, res) => {
  deleteComment(parseInt(req.params.id));
  res.status(204).end();
});

module.exports = app; // Exporter l'application pour les tests