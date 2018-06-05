import React from 'react';
import {Link} from 'react-router-dom';
import {merge} from 'lodash';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.login(user).then(() => this.props.history.push('/'));
  }

  handleGuest(e){
    e.preventDefault();
    const user = merge(this.state, {username: "guest1", password: 'password'});
    this.props.login(user).then(() => this.props.history.push('/'));
  }

  renderErrors() {
    return(
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login">
        <h2>InstaFriends</h2>
        <form className="form-box" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username}
            onChange={this.update("username")} className="field"
            placeholder="username"></input>
          <input type="password" value={this.state.password}
            onChange={this.update("password")} className="field"
            placeholder="Password"></input>
          <input type="submit" value="Log In"></input>
        </form>
        {this.renderErrors()}
        <span className="have-account">
          Have an account?
          <Link to="/signup">Sign up</Link>
        </span>
        <button className="signup-button" onClick={this.handleGuest}>Log in with Demo User</button>
      </div>
    );
  }
}

export default LoginForm;
