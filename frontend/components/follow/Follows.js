import React, { Component } from "react";
import { connect } from "react-redux";
import { FollowUserItem } from "./follow_user_item";

class Follows extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const status = this.props.status;
    const followers = Object.values(this.props[status]).map((user, idx) => (
      <FollowUserItem key={user.id} user={user} />
    ));
    return (
      <div>
        <h2>{this.props.status}</h2>
        {followers}
      </div>
    );
  }
}

const mapStateToProps = (
  { entities: { followers, following }, session },
  ownProps
) => ({
  followers,
  following,
  status: ownProps.status
});

export default connect(mapStateToProps)(Follows);
