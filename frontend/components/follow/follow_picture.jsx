import React from 'react';
import {FollowPictureItem} from './follow_picture_items';

export default class FollowPicture extends React.Component {
  constructor(props){
    super(props);
  }

  handleLike(e){
    e.preventDefault();
    this.props.createLike(this.props.picture.id);
  }

  handleUnlike(e){
    e.preventDefault();
    this.props.deleteLike(this.props.likes);
  }

  render(){
    let pictures = this.props.pictures.map(picture => {
      let likes = Object.values(this.props.likes).filter(like => like.pictureId === picture.id);
      return(
        <FollowPictureItem key={this.props.id}
          user={this.props.users[picture.userId]}
          picture={picture}
          likes={likes}
          handleLike={this.handleLike.bind(this)}
          handleUnlike={this.handleUnlike.bind(this)}/>
      );
    });

    return(
      <div>
        <ul>
          {pictures}
        </ul>
      </div>
    );
  }
}
