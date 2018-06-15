import React from 'react';
import {FeedLikeItems} from '../likes/likes_feed_items';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';
import {Link} from 'react-router-dom';

export const FollowPictureItem = ({user, picture,
  likes,handleLike, handleUnlike, setDate,currentUser}) => {
  let likeCount = likes.length;
  let commentFeed ="comment-feed";
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
        <div className="picture-holder-feed">
          <img src={picture.imgUrl} className="picture-feed"
            onDoubleClick={handleLike(picture.id)}/>
        </div>
        <br></br>
        <div className="extra-info">
          <FeedLikeItems likes={likes} likeCount={likeCount}
            handleUnlike={handleUnlike}
            handleLike={handleLike}
            className="feed-likes"
            pictureId={picture.id}
            currentUserId={currentUser.id}/>
          <span className="feed-user-caption">
            <Link to={`/user/${user.id}`}>
              <h4 className="feed-username">{user.username}</h4>
            </Link>
            <content>{picture.caption}</content>
          </span>
          <div className="comment-feed">
            <CommentIndexContainer picture={picture}
              commentFeed={commentFeed}/>
          </div>
          <span className="time-stamp">
            {setDate(Date.parse(picture.createdAt))}
          </span>
          <CommentFormContainer pictureId={picture.id} />
        </div>
    </li>
  );
};
