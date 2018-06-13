import React from 'react';


export const SearchListItem = ({user}) => (
  <li className="search-list-item">
    <Link to={`/user/${user.id}`} className='link-userpage'>
      <img src={user.imgUrl}
        className="pic-show-userpic"/>
      <h4 className="pic-show-username">{user.username}</h4>
    </Link>
  </li>
);
