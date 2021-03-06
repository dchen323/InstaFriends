import React from "react";
import { Link } from "react-router-dom";
import { FollowUserItem } from "./follow_user_item";

export default class FollowUserIndex extends React.Component {
  render() {
    let following = Object.values(this.props.following).map(user => (
      <FollowUserItem key={user.id} user={user} />
    ));

    return (
      <div className="following-feed">
        <div className="current-user-feed">
          <Link to={`/user/${this.props.currentUser.id}`}>
            <img
              src={this.props.currentUser.imgUrl}
              className="pic-show-userpic"
              alt={this.props.currentUser.username}
            />
          </Link>
          <Link to={`/user/${this.props.currentUser.id}`}>
            <h4>{this.props.currentUser.username}</h4>
          </Link>
          <button
            onClick={() =>
              this.props.logout().then(() => history.push("/login"))
            }
            className="feed-logout"
          >
            Logout
          </button>
        </div>
        <div className="following-icons">
          <ul>{following}</ul>
        </div>
        <div className="github">
          <a href="https://github.com/dchen323/InstaFriends">
            <i className="fab fa-github icon-git" />
          </a>
          <a href="https://www.linkedin.com/in/daniel-chen92/">
            <i className="fab fa-linkedin icon-git" />
          </a>
        </div>
      </div>
    );
  }
}
