import React from "react";
import { Link } from "react-router-dom";
import FollowPictureContainer from "../follow/follow_picture_container";
import Spinner from "../spinner/Spinner";

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props
      .fetchFollowers(this.props.currentUser.id)
      .then(() => this.setState({ loading: false }));
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="feed">
          <FollowPictureContainer />
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
