import {fetchUser} from '../../utils/user_api_util';
import {Link} from 'react-router-dom';

import React from 'react';

export const CommentIndexItem = ({comment,commentAuthor,closeModal}) => {
  let user = commentAuthor.username;
  return(
    <li className="comment-body">
      <Link to={`/user/${commentAuthor.id}/`} className="comment-author"
        onClick={closeModal}>
        {user}
      </Link>
      <span>
        {comment.body}
      </span>
  </li>);
};
