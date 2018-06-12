import React from 'react';
import {LikeItems} from '../likes/likes_items';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';
//javascript time-ago

export const FollowPictureItem = ({user, picture,
  likes,handleLike, handleUnlike}) => {

  let likeCount = Object.keys(likes).length;

  return (
    <li>
      <div>
        <span>{user.imgUrl} {user.username}</span>
        <img src={picture.imgUrl}/>
        <LikeItems likes={likes} likeCount={likeCount}
           handleUnlike={handleUnlike}
           handleLike={handleLike}/>
        <CommentsIndexContainer/>
        <CommentFormContainer />
      </div>
    </li>
  );
};
