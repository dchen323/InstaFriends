import {fetchUser} from '../../utils/user_api_util';

import React from 'react';

export const CommentIndexItem = ({comment,commentAuthor}) => {
  let user = commentAuthor.username;
  return(
    <li className="comment-body">
      <span className="comment-author">{user}</span> <span>{comment.body}</span>
  </li>);
};
