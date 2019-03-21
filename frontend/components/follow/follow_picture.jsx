import React from "react";
import { FollowPictureItem } from "./follow_picture_items";
import FollowingUserContainer from "../follow/follow_user_container";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export default class FollowPicture extends React.Component {
  constructor(props) {
    super(props);
    this.setDate = this.setDate.bind(this);
  }

  handleLike(id) {
    return e => {
      e.preventDefault();
      this.props.createLike(id);
    };
  }

  handleUnlike(like) {
    return e => {
      e.preventDefault();
      this.props.deleteLike(like);
    };
  }

  setDate(date) {
    TimeAgo.locale(en);
    const timeAgo = new TimeAgo("en-US");
    return timeAgo.format(date);
  }

  render() {
    let pictures = this.props.pictures.map(picture => {
      let likes = Object.values(this.props.likes).filter(
        like => like.pictureId === picture.id
      );
      return (
        <FollowPictureItem
          key={picture.id}
          user={this.props.users[picture.userId]}
          picture={picture}
          likes={likes}
          handleLike={this.handleLike.bind(this)}
          handleUnlike={this.handleUnlike.bind(this)}
          setDate={this.setDate}
          currentUser={this.props.currentUser}
        />
      );
    });
    if (!pictures.length) {
      pictures = (
        <span className="empty-feed">
          Follow some users to see their pictures!
        </span>
      );
    }
    return (
      <div className="feed-post-container">
        <ul className="feed-ul">{pictures}</ul>
        <FollowingUserContainer />
      </div>
    );
  }
}
