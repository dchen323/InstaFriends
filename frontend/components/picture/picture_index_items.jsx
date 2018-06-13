import React from 'react';

export const PictureIndexItems = ({picture, openModal,pictureId,
  likeCount,commentCount}) => (
  <li className="post-pics"
    onClick={openModal("Show Photo",pictureId)}><img src={picture.imgUrl}
    className="posted-picture" id="posted"/>
    <div className="hover-text">
      <span className="hover-span">
        <i className="fas fa-heart hover-icon"></i>
        <p>{likeCount}</p>
      </span>
      <span className="hover-span">
        <i className="fas fa-comment hover-icon"></i>
        <p>{commentCount}</p>
      </span>
    </div>
  </li>
);
