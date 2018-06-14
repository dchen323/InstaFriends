import React from 'react';

export const FeedLikeItems = ({likes,likeCount,
    handleUnlike, handleLike, pictureId,currentUserId}) => {
  let liked, unlike;
  likes = likes.filter(like => like.userId === currentUserId);
  if(likes.length > 0){
    liked="hide-button";
  }else{
    unlike="hide-button";
  }
  return(
    <div className='pic-like'>
      <div className="icon-shows">
        <i className={`far fa-heart like-icon ${liked}`}
          onClick={handleLike(pictureId)}></i>
        <img src="https://s20.postimg.cc/l6em6gka5/heavy-black-heart_2764.png" className={`fas fa-heart like-icon2 ${unlike}`}
          onClick={handleUnlike(likes[0])}/>
        <i className="far fa-comment like-icon"></i>
      </div>
      <h4 className="like-count">{likeCount} likes</h4>
    </div>
  );
};
