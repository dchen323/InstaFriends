export const fetchPictures = () => (
  $.ajax({
    url: '/api/pictures'
  })
);

export const fetchPicture = (userId,id) => (
  $.ajax({
    url:`/api/users/${userId}/pictures/${id}`
  })
);

export const uploadPicture = picture => (
    $.ajax({
      method: 'POST',
      url: "/api/pictures",
      data: { picture }
    })
);

export const updatePicture = picture => (
  $.ajax({
    method: 'PATCH',
    url: `/api/pictures/${picture.id}`,
    data: {picture}
  })
);

export const deletePicture = picture => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pictures/${picture.id}`
  })
);
