// tests/api.test.js

const request = require('supertest');
const app = require('../src/index'); // Importer l'application Express

describe('API Endpoints', () => {
  beforeEach(() => {
    // Réinitialiser les commentaires avant chaque test
    comments = [{ id: 1, text: 'Ceci est un commentaire' }];
  });

  it('should fetch comments', async () => {
    const response = await request(app).get('/api/comments');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ id: 1, text: 'Ceci est un commentaire' }]);
  });

  it('should add a comment', async () => {
    const response = await request(app)
      .post('/api/comments')
      .send({ text: 'Nouveau commentaire' });
    expect(response.status).toBe(200);
    expect(response.body.text).toBe('Nouveau commentaire');
  });

  it('should edit a comment', async () => {
    const response = await request(app)
      .put('/api/comments/1')
      .send({ text: 'Commentaire modifié' });
    expect(response.status).toBe(200);
    expect(response.body.text).toBe('Commentaire modifié');
  });

  it('should return 404 for non-existent comment', async () => {
    const response = await request(app)
      .put('/api/comments/999')
      .send({ text: 'Commentaire inconnu' });
    expect(response.status).toBe(404);
  });

  it('should delete a comment', async () => {
    const response = await request(app).delete('/api/comments/1');
    expect(response.status).toBe(204);
  });
});