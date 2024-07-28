// tests/commentService.test.js

const { getComments, addComment, editComment, deleteComment, resetComments } = require('../src/commentService');

describe('Comment Service', () => {
  beforeEach(() => {
    // Réinitialiser les commentaires avant chaque test
    resetComments();
    // Ajouter un commentaire initial pour les tests
    addComment('Ceci est un commentaire');
  });

  it('should get comments', () => {
    const result = getComments();
    expect(result).toEqual([{ id: expect.any(Number), text: 'Ceci est un commentaire' }]);
  });

  it('should add a comment', () => {
    const newComment = addComment('Nouveau commentaire');
    expect(newComment).toEqual(expect.objectContaining({ text: 'Nouveau commentaire' }));
    expect(getComments()).toContainEqual(newComment);
  });

  it('should edit a comment', () => {
    // Ajouter un commentaire pour s'assurer qu'il peut être modifié
    const comment = addComment('Commentaire à modifier');
    const editedComment = editComment(comment.id, 'Commentaire modifié');
    expect(editedComment).not.toBeNull();
    expect(editedComment.text).toBe('Commentaire modifié');
    expect(getComments()).toContainEqual(editedComment);
  });

  it('should return null when editing a non-existent comment', () => {
    const result = editComment(999, 'Commentaire inconnu');
    expect(result).toBeNull();
  });

  it('should delete a comment', () => {
    const commentToDelete = addComment('Commentaire à supprimer');
    deleteComment(commentToDelete.id);
    expect(getComments()).toHaveLength(0); // La liste devrait être vide après suppression
  });
});