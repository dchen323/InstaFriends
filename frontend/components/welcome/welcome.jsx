import React from "react";
import { Link } from "react-router-dom";
import FollowPictureContainer from "../follow/follow_picture_container";
import FollowingUserContainer from "../follow/follow_user_container";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    this.props
      .fetchFollowers(this.props.currentUser.id)
      .then(() => this.setState({ loading: true }));
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="feed">
          <FollowPictureContainer />
          <FollowingUserContainer />
        </div>
      );
    } else {
      return <div className="feed" />;
    }
  }
}
