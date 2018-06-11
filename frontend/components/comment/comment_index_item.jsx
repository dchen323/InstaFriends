import {fetchUser} from '../../utils/user_api_util';

import React from 'react';

// let user = $.ajax({
//   url: `/api/users/${userId}`
// });
// debugger
// user = user.responseJSON.user.username;
// {user}
export const CommentIndexItem = ({comment,commentAuthor}) => {
  let user = commentAuthor.username;
  return(
    <li className="comment-body">
      <span className="comment-author">{user}</span> <span>{comment.body}</span>
  </li>);
};
