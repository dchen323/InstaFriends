import React from 'react';

export const PictureIndexItems = ({picture, openModal}) => (
  <li className="post-pics"
    onClick={openModal("Show Photo")}><img src={picture.imgUrl}
    className="posted-picture"/></li>
);
