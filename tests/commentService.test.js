// tests/commentService.test.js

const { getComments, addComment, editComment, deleteComment } = require('../src/commentService');

describe('Comment Service', () => {
  beforeEach(() => {
    // Réinitialiser les commentaires avant chaque test
    comments = [{ id: 1, text: 'Ceci est un commentaire' }];
  });

  it('should get comments', () => {
    const result = getComments();
    expect(result).toEqual([{ id: 1, text: 'Ceci est un commentaire' }]);
  });

  it('should add a comment', () => {
    const newComment = addComment('Nouveau commentaire');
    expect(newComment).toEqual(expect.objectContaining({ text: 'Nouveau commentaire' }));
    expect(getComments()).toContainEqual(newComment);
  });

  it('should edit a comment', () => {
    const editedComment = editComment(1, 'Commentaire modifié');
    expect(editedComment.text).toBe('Commentaire modifié');
    expect(getComments()).toContainEqual(editedComment);
  });

  it('should return null when editing a non-existent comment', () => {
    const result = editComment(999, 'Commentaire inconnu');
    expect(result).toBeNull();
  });

  it('should delete a comment', () => {
    deleteComment(1);
    expect(getComments()).toHaveLength(0);
  });
});