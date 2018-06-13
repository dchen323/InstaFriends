import React from 'react';
import {FeedLikeItems} from '../likes/likes_feed_items';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';
import {Link} from 'react-router-dom'
//javascript time-ago

export const FollowPictureItem = ({user, picture,
  likes,handleLike, handleUnlike}) => {

  let likeCount = likes.length;
  return (
    <li className="picture-feed-container">
        <span className="feed-user-pic">
          <Link to={`/user/${user.id}`}>
            <img src={user.imgUrl} className="pic-show-userpic"/>
          </Link>
          <Link to={`/user/${user.id}`}>
            <h4 className="pic-show-username">{user.username}</h4>
          </Link>
        </span>
        <img src={picture.imgUrl} className="picture-feed"/>
        <br></br>
        <div className="extra-info">
          <FeedLikeItems likes={likes} likeCount={likeCount}
            handleUnlike={handleUnlike}
            handleLike={handleLike}
            className="feed-likes"
            pictureId={picture.id}/>
          <span className="feed-user-caption">
            <Link to={`/user/${user.id}`}>
              <h4 className="feed-username">{user.username}</h4>
            </Link>
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
