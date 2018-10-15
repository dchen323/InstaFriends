import React, { Component } from "react";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  toggleDropDown() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let logoutItem;
    if (this.state.open) {
      logoutItem = (
        <div className="dropdown-logout">
          <div className="arrow-left" />
          <li
            className="edit-profile dropdown-list"
            onClick={this.props.logout.bind(this)}
          >
            Logout
          </li>
        </div>
      );
    } else {
      logoutItem = <div styles={{ display: "none" }} />;
    }

    return (
      <div className="icon4-container">
        <i className="fas fa-cog icon4" onClick={this.toggleDropDown} />
        {logoutItem}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Dropdown);
