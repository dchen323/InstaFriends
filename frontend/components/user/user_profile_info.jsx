import React from "react";
import FollowContainer from "../follow/follow_container";
import Dropdown from "../dropdown/";
import { withRouter } from "react-router";

const UserProfileInfo = ({
  username,
  length,
  name,
  openModal,
  currentUser,
  userId,
  followed,
  following,
  followers,
  match
}) => {
  let disabled;
  if (!currentUser) {
    disabled = "hide-button";
  }

  let followingLength = Object.keys(following).length || 0;
  let followersLength = Object.keys(followed).length || 0;

  return (
    <div className="user-content">
      <div className="user-content1">
        <h3 className="profile-username">{username}</h3>
        <FollowContainer currentUser={currentUser} userId={userId} />
        <button className={`edit-profile ${disabled} hover-disable`}>
          Edit Profile
        </button>
        <Dropdown hidden={disabled} />
      </div>
      <div className="user-content2">
        <h4 className="user-info">{length} posts</h4>
        <h4 className="user-info" onClick={openModal("Followers")}>
          {followersLength} followers
        </h4>
        <h4 className="user-info" onClick={openModal("Following")}>
          {followingLength} following
        </h4>
      </div>
      <div className="user-content3">
        <h4 className="user-name">{name}</h4>
        <button
          className={`add-photo ${disabled}`}
          id="photo-add"
          onClick={openModal("Add Photo")}
        >
          Add Photo
        </button>
      </div>
    </div>
  );
};

export default withRouter(UserProfileInfo);
