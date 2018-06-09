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

export const uploadPicture = picture => {
  debugger
  return (
    $.ajax({
      method: 'POST',
      url: "/api/pictures",
      data: { picture }
    })
  );
};
