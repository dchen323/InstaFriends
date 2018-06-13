export const searchUsers = query => (
  $.ajax({
    url: '/api/search',
    data : {query}
  })
);
