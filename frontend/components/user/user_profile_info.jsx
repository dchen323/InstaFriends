import React from 'react';
import FollowContainer from '../follow/follow_container';

export const UserProfileInfo =
  ({username,length,name,openModal,currentUser,userId,follows}) => {
  let disabled;
  if (!currentUser){
    disabled = "hide-button";
  }
  let followingLength = Object.keys(follows).length || 0;

  return (
    <div className="user-content">
      <div className="user-content1">
        <h3 className="profile-username">{username}</h3>
        <FollowContainer currentUser={currentUser} userId={userId}/>
        <button className={`edit-profile ${disabled}`}>Edit Profile</button>
        <i className="fas fa-cog icon4"></i>
      </div>
      <div className="user-content2">
        <h4 className="user-info">{length} posts</h4>
        <h4 className="user-info">0 followers</h4>
        <h4 className="user-info">{followingLength} following</h4>
      </div>
      <div className="user-content3">
        <h4 className="user-name">{name}</h4>
        <button className={`add-photo ${disabled}`} id="photo-add"
          onClick={openModal("Add Photo")}>Add Photo</button>
      </div>
    </div>
  );
};
