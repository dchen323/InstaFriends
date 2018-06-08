import React from 'react';
import {Link} from 'react-router-dom';
import {PictureIndexItem} from '../picture/picture_index_item';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


class UserProfile extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProp(nextProp){
    if(this.props.user.id !== nextProp.match.params.userId){
      this.props.fetchUser(nextProp.match.params.userId);
    }
  }

  render(){
    let length = Object.values(this.props.pictures).length;
    const pictures = Object.values(this.props.pictures).map(picture => (
      <PictureIndexItem key={picture.id}
        picture={picture} />
    ));
    return(
      <div className="user">
        <header className="profile-box">
          <img src={this.props.user.imgUrl} className="user-pic"/>
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
              <button className="add-photo" id="photo-add">Add Photo</button>
            </div>
          </div>
        </header>
        <footer className="profile-footer">
          <h4 className="user-info">Posts</h4>
          <h4 className="user-info">Saved</h4>
        </footer>
        <content className="picture-container">
          <ul className="picture-holder">
            {pictures}
          </ul>
        </content>
      </div>
    );
  }
}

export default UserProfile;
