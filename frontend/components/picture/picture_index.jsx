import React from 'react';
import EditPictureFormContainer from './edit_picture_form_container';
import CommentFormContainer from '../comment/comment_form_container';
import {LikeItems} from '../likes/likes_items';
import {withRouter} from 'react-router';

class PictureIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: true,
    };
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePicture(this.props.picture);
    this.props.closeModal();
  }

  handleLike(e){
    e.preventDefault();
    this.props.createLike(this.props.picture.id);
  }

  handleUnlike(e){
    e.preventDefault();
    this.props.deleteLike(this.props.likes);
  }

  render() {
    if (this.props.picture === undefined){
      return (<div></div>);
    }
    let disabled;
    if(this.props.picture.userId !== this.props.sessionId){
      disabled = "hide-button";
    }

    return(
      <div className="picture-show-container">
        <img src={this.props.picture.imgUrl} className="display-picture"/>
        <div className="pic-show-info">
          <header className="pic-show-header">
            <img src={this.props.user.imgUrl} className="pic-show-userpic"/>
            <h2>{this.props.user.username}</h2>
            <button className={`pic-show-button2 ${disabled}`}
              onClick={this.handleDelete.bind(this)}>Delete Picture</button>
          </header>
          <EditPictureFormContainer picture={this.props.picture}
            disabled={disabled} user={this.props.user}/>
          <LikeItems handleLike={this.handleLike.bind(this)}
            handleUnlike={this.handleUnlike.bind(this)}
            likeCount = {this.props.likeCount}
            likes ={this.props.likes} />
          <CommentFormContainer pictureId={this.props.picture.id} />
        </div>
      </div>
    );
  }
}

export default withRouter(PictureIndex);
