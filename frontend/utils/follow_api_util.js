export const fetchFollowers = id => (
  $.ajax({
    url: `/api/users/${id}/follows`
  })
);

export const createFollow = id => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${id}/follows`,
    data: {id}
  })
);

export const deleteFollow = follow => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${follow.userId}/follows/${follow.id}`
  })
);
