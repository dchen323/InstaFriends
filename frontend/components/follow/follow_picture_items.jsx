import React from 'react';
import {LikeItems} from '../likes/likes_items';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';
//javascript time-ago

export const FollowPictureItem = ({user, picture,
  likes,handleLike, handleUnlike}) => {

  let likeCount = Object.values(likes).length;

  return (
    <li className="picture-feed-container">
        <span className="feed-user-pic">
          <img src={user.imgUrl} className="pic-show-userpic"/>
          <h4>{user.username}</h4>
        </span>
        <img src={picture.imgUrl} className="picture-feed"/>
        <br></br>
        <div className="extra-info">
          <LikeItems likes={likes} likeCount={likeCount}
            handleUnlike={handleUnlike}
            handleLike={handleLike}
            className="feed-likes"/>
          <span className="feed-user-caption">
            <h4 className="feed-username">{user.username}</h4>
            <content>{picture.caption}</content>
          </span>
          <div className="comment-feed">
            <CommentIndexContainer pictureId={picture.id}/>
          </div>
          <CommentFormContainer pictureId={picture.id} />
        </div>
    </li>
  );
};
