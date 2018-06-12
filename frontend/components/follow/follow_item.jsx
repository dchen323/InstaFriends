import React from 'react';
import {withRouter} from 'react-router';

class FollowItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  handleUnfollow(e){
    e.preventDefault();
    this.props.deleteFollow(this.props.followed[0]);
  }

  handleFollow(e){
    e.preventDefault();
    this.props.createFollow(this.props.match.params.userId);
  }

  render(){
    let follow;
    if(this.props.currentUser){
      follow = "hide-button";
    }
    if(this.props.followed.length === 0){
      return(
        <button className={`follower-button ${follow}`}
          onClick={this.handleFollow.bind(this)}>Follow</button>
      );
    }else{
      return(
        <button className={`following-button ${follow}`}
          onClick={this.handleUnfollow.bind(this)}>Following</button>
      );
    }
  }
}

export default withRouter(FollowItem);
