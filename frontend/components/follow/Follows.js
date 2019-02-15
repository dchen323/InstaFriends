import React, { Component } from "react";
import { connect } from "react-redux";

class Follows extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.status}</h2>
      </div>
    );
  }
}

const mapStateToProps = (
  { entities: { followed, following }, session },
  ownProps
) => ({
  followers: followed,
  following,
  status: ownProps.status
});

export default connect(mapStateToProps)(Follows);
