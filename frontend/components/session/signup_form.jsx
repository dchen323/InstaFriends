import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {merge} from 'lodash';

class SignupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      name: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  componentDidMount(){
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.signup(user).then(() => this.props.history.push('/'));
  }

  handleGuest(e){
    e.preventDefault();
    const user = merge(this.state, {username: "gunther", password: 'password'});
    this.props.login(user);
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
    return(
      <div className="signup">
        <img src='https://s20.postimg.cc/9lsqu622l/for_Daniel2.png'
          className="login-picture1"></img>
        <div className="signup-box">
          <div className="signup-form">
            <h2 className="title">InstaFriends</h2>
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
              <p className="terms">By signing up, you agree to our Terms,Data Policy and Cookies Policy.</p>
            </form>
          <br></br>
            {this.renderErrors()}
          </div>
          <div className="have-account">
            <p>Have an account? </p>
            <Link to="/login" className="login-redir"> Log in</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
