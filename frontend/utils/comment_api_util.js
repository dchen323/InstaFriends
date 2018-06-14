export const postComment = comment => (
  $.ajax({
    method: 'POST',
    url: `/api/pictures/${comment.pictureId}/comments`,
    data: {comment}
  })
);

export const deleteComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pictures/${comment.pictureId}/comments/${comment.id}`
  })
);
