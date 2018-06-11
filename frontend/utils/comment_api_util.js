export const postComment = comment => (
  $.ajax({
    method: 'POST',
    url: `/api/pictures/${comment.pictureId}/comments`,
    data: {comment}
  })
);
