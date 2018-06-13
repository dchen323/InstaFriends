import React from 'react';
import EditPictureFormContainer from './edit_picture_form_container';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';
import {LikeItems} from '../likes/likes_items';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';

class PictureIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: true,
      inputFocus: false
    };

    this.setInputFocus = this.setInputFocus.bind(this);
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

  setInputFocus(value){
    this.setState({inputFocus: value});
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
          <CommentIndexContainer pictureId={this.props.picture.id}
            closeModal={this.props.closeModal}/>
          <LikeItems handleLike={this.handleLike.bind(this)}
            handleUnlike={this.handleUnlike.bind(this)}
            likeCount = {this.props.likeCount}
            likes ={this.props.likes}
            setInputFocus={this.setInputFocus}/>
          <CommentFormContainer pictureId={this.props.picture.id}
            inputFocus={this.state.inputFocus}/>
        </div>
      </div>
    );
  }
}

export default withRouter(PictureIndex);
