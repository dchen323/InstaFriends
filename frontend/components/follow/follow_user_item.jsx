import React from 'react';
import {Link} from 'react-router-dom';

export const FollowUserItem = ({user}) => (
  <li className="user-feed-item">
    <Link to={`/user/${user.id}`} className='link-userpage'>
      <img src={user.imgUrl}
        className="pic-show-userpic"/>
      <h4 className="pic-show-username">{user.username}</h4>
    </Link>
  </li>
);
