import React from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends React.Component {


  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProp(nextProp){
    if(this.props.user.id !== nextProp.match.params.userId){
      this.props.fetchUser(nextProp.match.params.userId);
    }
  }

  render(){
    let length = 0;
    if (this.props.user.pictures){
      length = this.props.user.pictures.length;
    }
    return(
      <div className="user">
        <header className="profile-box">
          <img src={this.props.user.img_url} className="user-pic"/>
          <div className="user-content">
            <div className="user-content1">
              <h3 className="profile-username">{this.props.user.username}</h3>
              <button className="edit-profile">Edit Profile</button>
              <i className="fas fa-cog icon4"></i>
            </div>
            <div className="user-content2">
              <h4 className="user-info">{length} posts</h4>
              <h4 className="user-info">0 followers</h4>
              <h4 className="user-info"> 2 following</h4>
            </div>
            <div className="user-content3">
              <h4 className="user-name">{this.props.user.name}</h4>
              <button className="add-photo">Add Photo</button>
            </div>
          </div>
        </header>
        <footer className="profile-footer">
          <h4 className="user-info">Posts</h4>
          <h4 className="user-info">Saved</h4>
        </footer>
      </div>
    );
  }
}

export default UserProfile;
