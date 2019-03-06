import React from "react";

export const LikeItems = ({
  likes,
  likeCount,
  handleUnlike,
  handleLike,
  setInputFocus
}) => {
  let like, unlike;

  if (likes) {
    like = "hide-button";
  } else {
    unlike = "hide-button";
  }
  return (
    <div className="pic-like">
      <div className="icon-shows">
        <i className={`far fa-heart like-icon ${like}`} onClick={handleLike} />
        <img
          src="https://s20.postimg.cc/l6em6gka5/heavy-black-heart_2764.png"
          className={`fas fa-heart like-icon2 ${unlike}`}
          onClick={handleUnlike}
        />
        <i
          className="far fa-comment like-icon"
          onClick={() => setInputFocus()}
        />
      </div>
      <h4 className="like-count">{likeCount} likes</h4>
    </div>
  );
};
