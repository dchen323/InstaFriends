import React from "react";
import { Link } from "react-router-dom";
import { merge } from "lodash";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  componentDidMount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.login(user).then(() => this.props.history.push("/"));
  }

  handleGuest(e) {
    e.preventDefault();
    const user = merge(this.state, {
      username: "gunther",
      password: "password"
    });
    this.props.login(user).then(() => this.props.history.push("/"));
  }

  renderErrors() {
    return (
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let errorClass = "";
    if (this.props.errors.length > 0) {
      errorClass = "invalid";
    }

    const isEnabled =
      this.state.username.length > 0 && this.state.password.length > 0;
    let disabled;
    if (!isEnabled) {
      disabled = "disabled";
    }
    return (
      <div className="login flex-col-null-center">
        <div className="login-box flex-col-null-center">
          <h2 className="title">InstaFriends</h2>
          <form
            className="form-box flex-col-null-center"
            onSubmit={this.handleSubmit}
          >
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className={`field ${errorClass}`}
              placeholder="username"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className={`field ${errorClass}`}
              placeholder="Password"
            />
            <button
              className={`signup-button ${disabled}`}
              disabled={!isEnabled}
            >
              Log In
            </button>
            <button className="signup-button" onClick={this.handleGuest}>
              Log in with Demo User
            </button>
          </form>
          {this.renderErrors()}
        </div>
        <div>
          <div className="have-account flex-row-center-center">
            <p>Don't an account?</p>
            <Link to="/signup" className="login-redir">
              {" "}
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
