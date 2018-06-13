import React from 'react';
import {FollowPictureItem} from './follow_picture_items';

export default class FollowPicture extends React.Component {
  constructor(props){
    super(props);
  }

  handleLike(id){
    return (e) => {
      e.preventDefault();
      this.props.createLike(id);
    };
  }

  handleUnlike(like){
    return (e) => {
      e.preventDefault();
      this.props.deleteLike(like);
    };
  }

  render(){
    let pictures = this.props.pictures.map(picture => {
      let likes = Object.values(this.props.likes).filter(like => like.pictureId === picture.id);
      return(
        <FollowPictureItem key={picture.id}
          user={this.props.users[picture.userId]}
          picture={picture}
          likes={likes}
          handleLike={this.handleLike.bind(this)}
          handleUnlike={this.handleUnlike.bind(this)}/>
      );
    });

    return(
      <div className="feed-post-container">
        <ul className="feed-ul">
          {pictures}
        </ul>
      </div>
    );
  }
}
