import {fetchUser} from '../../utils/user_api_util';
import {Link} from 'react-router-dom';

import React from 'react';

export const CommentIndexItem = ({comment,commentAuthor,closeModal,
    handleDelete,pictureAuthorId}) => {
  let user = commentAuthor.username;
  let disabled;
  if(comment.userId !== commentAuthor.id ||
    comment.userId !== pictureAuthorId){
      disabled = "hide-button";
  }
  return(
    <li className="comment-body">
      <Link to={`/user/${commentAuthor.id}/`} className="comment-author"
        onClick={closeModal}>
        {user}
      </Link>
      <span className ="comment-delete">
        {comment.body}
        <i className={`fas fa-times deleteicon ${disabled}`}
          onClick={() => handleDelete(comment)}></i>
      </span>
  </li>);
};
