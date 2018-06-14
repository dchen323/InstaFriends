import {fetchUser} from '../../utils/user_api_util';
import {Link} from 'react-router-dom';
import React from 'react';

export default class CommentIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    this.props.deleteComment(this.props.comment);
  }

  render(){
    let user = this.props.commentAuthor.username;
    let hideButton="hide-button";
    if(this.props.sessionId === this.props.commentAuthor.id || this.props.pictureAuthorId === this.props.sessionId){
      hideButton = "";
    }
    return(
      <li className="comment-body">
        <Link to={`/user/${this.props.commentAuthor.id}/`}
          className="comment-author"
          onClick={this.props.closeModal}>
          {user}
        </Link>
        <span className ="comment-delete">
          {this.props.comment.body}
          <i className={`fas fa-times deleteicon ${hideButton}`}
            onClick={this.handleDelete}></i>
        </span>
      </li>);
    }
}
