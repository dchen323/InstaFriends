import React from 'react';

export const PictureIndexItems = ({picture, openModal,pictureId}) => (
  <li className="post-pics"
    onClick={openModal("Show Photo",pictureId)}><img src={picture.imgUrl}
    className="posted-picture"/></li>
);
