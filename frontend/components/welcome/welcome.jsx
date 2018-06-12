import React from 'react';
import {Link} from 'react-router-dom';
import FollowPictureContainer from '../follow/follow_picture_container';
import FollowingUserContainer from '../follow/follow_user_container';


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
        <button onClick={() => this.props.logout()
            .then(() => history.push('/login'))}>Logout</button>
          <FollowPictureContainer/>
          <FollowingUserContainer/>
      </div>
    );
  }
}
