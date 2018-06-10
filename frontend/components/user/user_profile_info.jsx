import React from 'react';

export const UserProfileInfo =
  ({username,length,name,openModal,currentUser}) => {
  let disabled,follow,followText;
  if (!currentUser){
    disabled = "hide-button";
  }
  if(currentUser){
    follow = "hide-button";
  }
  return (
    <div className="user-content">
      <div className="user-content1">
        <h3 className="profile-username">{username}</h3>
        <button className={`${follow}`}>Follow</button>
        <button className={`edit-profile ${disabled}`}>Edit Profile</button>
        <i className="fas fa-cog icon4"></i>
      </div>
      <div className="user-content2">
        <h4 className="user-info">{length} posts</h4>
        <h4 className="user-info">0 followers</h4>
        <h4 className="user-info"> 2 following</h4>
      </div>
      <div className="user-content3">
        <h4 className="user-name">{name}</h4>
        <button className={`add-photo ${disabled}`} id="photo-add"
          onClick={openModal("Add Photo")}>Add Photo</button>
      </div>
    </div>
  );
};
