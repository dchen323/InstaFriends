import React from 'react';
import {Link} from 'react-router-dom';

export const SearchListItem = ({user,hide}) => {
  return(
    <li className={`search-list-item ${hide}`}>
      <Link to={`/user/${user.id}`} className='link-userpage'>
        <img src={user.imgUrl}
          className="pic-show-userpic2"/>
        <h4 className="pic-show-username">{user.username}</h4>
      </Link>
    </li>
  );
};
