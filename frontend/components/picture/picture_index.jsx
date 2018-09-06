import React from "react";
import EditPictureFormContainer from "./edit_picture_form_container";
import CommentFormContainer from "../comment/comment_form_container";
import CommentIndexContainer from "../comment/comment_index_container";
import { LikeItems } from "../likes/likes_items";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

class PictureIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: true,
      inputFocus: false
    };

    this.setInputFocus = this.setInputFocus.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePicture(this.props.picture);
    this.props.closeModal();
  }

  handleLike(e) {
    e.preventDefault();
    this.props.createLike(this.props.picture.id);
  }

  handleUnlike(e) {
    e.preventDefault();
    this.props.deleteLike(this.props.likes);
  }

  setInputFocus(value) {
    this.setState({ inputFocus: value });
  }

  setDate(date) {
    TimeAgo.locale(en);
    const timeAgo = new TimeAgo("en-US");
    return timeAgo.format(date);
  }

  render() {
    if (this.props.picture === undefined) {
      return <div />;
    }
    let disabled;
    if (this.props.picture.userId !== this.props.sessionId) {
      disabled = "hide-button";
    }

    return (
      <div className="picture-show-container">
        <div className="display-picture-holder">
          <img
            src={this.props.picture.imgUrl}
            className="display-picture"
            onDoubleClick={
              this.props.likes ? this.handleUnlike : this.handleLike
            }
          />
        </div>
        <div className="pic-show-info">
          <header className="pic-show-header">
            <Link
              to={`/user/${this.props.user.id}`}
              onClick={this.props.closeModal}
            >
              <img src={this.props.user.imgUrl} className="pic-show-userpic" />
            </Link>
            <Link
              to={`/user/${this.props.user.id}`}
              onClick={this.props.closeModal}
            >
              <h2 className="pic-show-username">{this.props.user.username}</h2>
            </Link>
            <button
              className={`pic-show-button2 ${disabled}`}
              onClick={this.handleDelete}
            >
              Delete Picture
            </button>
          </header>
          <EditPictureFormContainer
            picture={this.props.picture}
            disabled={disabled}
            user={this.props.user}
          />
          <CommentIndexContainer
            picture={this.props.picture}
            closeModal={this.props.closeModal}
          />
          <LikeItems
            handleLike={this.handleLike}
            handleUnlike={this.handleUnlike}
            likeCount={this.props.likeCount}
            likes={this.props.likes}
            setInputFocus={this.setInputFocus}
          />
          <span className="time-stamp">
            {this.setDate(Date.parse(this.props.picture.createdAt))}
          </span>
          <CommentFormContainer
            pictureId={this.props.picture.id}
            inputFocus={this.state.inputFocus}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PictureIndex);
