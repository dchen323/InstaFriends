import React, { Component } from "react";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.createDropDown = this.createDropDown.bind(this);
  }

  toggleDropDown() {
    this.setState({ open: !this.state.open });
  }

  createDropDown() {
    if (this.state.open) {
      return (
        <div className="dropdown-logout">
          <div className="arrow-left" />
          <li
            className="edit-profile dropdown-list hover"
            onClick={this.props.logout.bind(this)}
          >
            Logout
          </li>
        </div>
      );
    }
    return <div styles={{ display: "none" }} />;
  }

  render() {
    const logoutItem = this.createDropDown();

    return (
      <div className="icon4-container">
        <i
          className={`fas fa-cog icon4  ${this.props.hidden}`}
          onClick={this.toggleDropDown}
        />
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
