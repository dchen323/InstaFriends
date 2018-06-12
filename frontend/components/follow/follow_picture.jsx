import React from 'react';

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
    let pictures = this.props.pictures.map(picture => (
      <FollowPictureItem key={this.props.id}
        user={this.props.users[picture.userId]}
        picture={picture}
        likes={this.props.likes[picture.Id]}
        handleLike={this.handleLike.bind(this)}
        handleUnlike={this.handleUnlike.bind(this)}/>
    ));

    return(
      <div>
      </div>
    );
  }
}
