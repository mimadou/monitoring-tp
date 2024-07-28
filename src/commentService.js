// src/commentService.js

let comments = [{ id: 1, text: 'Ceci est un commentaire' }];

function getComments() {
  return comments;
}

function addComment(text) {
  const newComment = { id: Date.now(), text };
  comments.push(newComment);
  return newComment;
}

function editComment(id, text) {
  const comment = comments.find(c => c.id === id);
  if (comment) {
    comment.text = text;
    return comment;
  }
  return null;
}

function deleteComment(id) {
  comments = comments.filter(c => c.id !== id);
}

module.exports = { getComments, addComment, editComment, deleteComment };