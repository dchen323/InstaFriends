import React from 'react';

export const PictureIndexItems = ({picture, openModal,pictureId,
  likeCount,commentCount}) => (
  <li className="post-pics"
    onClick={openModal("Show Photo",pictureId)}><img src={picture.imgUrl}
    className="posted-picture" id="posted"/>
    <div className="hover-pic">
      <div className="hover-text">
        <i className="far fa-heart"></i>
        <p>{likeCount}</p>
        <i className="far fa-comment"></i>
        <p>{commentCount}</p>
      </div>
    </div>
  </li>
);
