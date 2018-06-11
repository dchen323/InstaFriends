import React from 'react';

export const LikeItems = ({likes,likeCount, handleUnlike, handleLike}) => {

  let like, unlike;

  if(likes){
    like="hide-button";
  }else{
    unlike="hide-button";
  }
  // onclick={() => handleLike()}
  return(
    <div className='pic-like'>
      <i className={`far fa-heart like-icon ${like}`}
        onClick={handleLike}></i>
      <img src="https://s20.postimg.cc/l6em6gka5/heavy-black-heart_2764.png" className={`fas fa-heart like-icon2 ${unlike}`}
        onClick={handleUnlike}/>
      <h4 className="like-count">{likeCount} likes</h4>
    </div>
  );
};
