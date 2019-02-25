import React, { Component } from "react";
import { connect } from "react-redux";
import { FollowsItem } from "./FollowsItem";

class Follows extends Component {
  constructor(props) {
    super(props);

    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleUnfollow() {}

  handleFollowsss(s) {}

  render() {
    const status = this.props.status;
    const followers = Object.values(this.props[status]).map((user, idx) => {
      return (
        <div key={user.id}>
          <FollowsItem user={user} closeModal={this.props.closeModal} />
          {/* <button className="following-button" onClick={this.handleUnfollow}>
            Following
          </button> */}
        </div>
      );
    });
    return (
      <div className="follow-menu">
        <h1 className="follow-title">{this.props.title}</h1>
        <div className="follow-items">{followers}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { followers, following }, session }) => ({
  followers,
  following,
  session
});

export default connect(mapStateToProps)(Follows);
