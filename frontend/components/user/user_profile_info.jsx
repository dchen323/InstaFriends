import React from 'react';
import FollowContainer from '../follow/follow_container';
import {withRouter} from 'react-router';

const UserProfileInfo =
  ({username,length,name,openModal,currentUser,userId,
    follows,followed,following, match}) => {
  let disabled;
  if (!currentUser){
    disabled = "hide-button";
  }
  // let values = Object.keys(follows);
  // values = values.filter(follow => follow.userId === match.params.userId);
  let followingLength = Object.keys(following).length || 0;
  let followersLength = Object.keys(followed).length || 0;

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
        <h4 className="user-info">{followersLength} followers</h4>
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

export default withRouter(UserProfileInfo)
