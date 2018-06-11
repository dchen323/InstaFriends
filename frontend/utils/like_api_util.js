export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: `/api/pictures/${like}/likes`,
    data: {like}
  })
);


export const deleteLike = like =>(
  $.ajax({
    method: 'DELETE',
    url: `api/pictures/${like.pictureId}/likes/${like.id}`
  })
);
