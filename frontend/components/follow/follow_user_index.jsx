import React from 'react';
import {Link} from 'react-router-dom';

export default class FollowUserIndex extends React.Component {

  render(){

    let following = this.props.following.

    return(
      <div className="following-feed">
        <div className="current-user-feed">
          <Link to={`/user/${this.props.currentUser.id}`}>
            <img src={this.props.currentUser.imgUrl}
              className="pic-show-userpic"/>
            <h4>{this.props.currentUser.username}</h4>
          </Link>
        </div>

      </div>
    );
  }
}
