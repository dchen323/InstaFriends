import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {merge} from 'lodash';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      name: '',
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
    this.props.signup(user).then(() => this.props.history.push('/'));
  }

  handleGuest(e){
    e.preventDefault();
    const user = merge(this.state, {username: "guest1", password: 'password'});
    this.props.login(user);
  }

  renderErrors() {
    return(
      <ul className="signup-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="signup">
        <div className="login-picture">
          <img src='https://s20.postimg.cc/ltx8do2rx/Ig1.jpg'
            className="login-picture1"></img>
          <img src='https://s20.postimg.cc/4gmxywmx9/Ig2.jpg'
            className="login-picture2"></img>
        </div>
        <div className="signup-form">
          <h2>InstaFriends</h2>
          <p className="signup-ad">Sign up to see photos and videos from your friends.</p>
          <button className="signup-button" onClick={this.handleGuest}>Log in with Demo User</button>
          <form className="form-box" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name}
              onChange={this.update("name")} className="field"
              placeholder="Full Name"></input>
            <input type="text" value={this.state.username}
              onChange={this.update("username")} className="field"
              placeholder="Username"></input>
            <input type="password" value={this.state.password}
              onChange={this.update("password")} className="field"
              placeholder="Password"></input>
            <input type="submit" value="Sign Up" className="signup-button"></input>
          </form>
          {this.renderErrors()}
          <p className="terms">By signing up, you agree to our Terms,Data Policy and Cookies Policy.</p>
          <span className="have-account">
              Have an account?
              <Link to="/login">Log in</Link>
            </span>
        </div>
      </div>
    );
  }
}

export default SignupForm;
