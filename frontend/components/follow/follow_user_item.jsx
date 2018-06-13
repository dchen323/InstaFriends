import React from 'react';
import {Link} from 'react-router-dom';

export const FollowUserItem = ({user}) => (
  <li className="user-feed-item">
    <Link to={`/user/${user.id}`}>
      <img src={user.imgUrl}
        className="pic-show-userpic"/>
      <h4>{user.username}</h4>
    </Link>
  </li>
);
