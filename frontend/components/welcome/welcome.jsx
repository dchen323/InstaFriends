import React from 'react';
import SignupFormContainer from '../session/signup_form_container';
import {Link} from 'react-router-dom';


export default class Welcome extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchFollowers(this.props.currentUser.id);
  }

  render() {
    return(
      <div className = "feed">
        <h1>Main show page filler</h1>
        <h2>Hi,{this.props.currentUser.username}</h2>
        <button onClick={() => this.props.logout()
            .then(() => history.push('/login'))}>Logout</button>
      </div>
    );
  }
}
