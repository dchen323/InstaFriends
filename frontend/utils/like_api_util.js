export const createLike = id => (
  $.ajax({
    method: 'POST',
    url: `/api/pictures/${id}/likes`,
    data: {like: {picture_id: id}}
  })
);


export const deleteLike = like => (
  $.ajax({
    method: 'DELETE',
    url: `api/pictures/${like.pictureId}/likes/${like.id}`
  })
);
