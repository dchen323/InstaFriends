import React from 'react';

export const PictureIndexItem = ({picture}) => (
  <li key={picture.id} className="post-pics"><img src={picture.imgUrl}
    className="posted-picture"/></li>
);
