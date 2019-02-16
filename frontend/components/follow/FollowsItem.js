import React from "react";
import { Link } from "react-router-dom";

export const FollowsItem = ({ user, closeModal }) => (
  <li className="user-feed-item" onClick={closeModal}>
    <Link to={`/user/${user.id}`} className="link-userpage">
      <img src={user.imgUrl} className="pic-show-userpic" />
      <h4 className="pic-show-username">{user.username}</h4>
    </Link>
  </li>
);
