import React from 'react';
import CommentIndexItem from './comment_index_item';

export default class CommentIndex extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let comments =this.props.comments.map(comment => (
      <CommentIndexItem key={comment.id} comment={comment}
        commentAuthor={this.props.commentAuthor[comment.userId]}
        closeModal={this.props.closeModal}
        pictureAuthorId={this.props.pictureAuthorId}
        deleteComment={this.props.deleteComment}/>
    ));
    return(
      <div>
        <ul className="comments-container">
          {comments}
        </ul>
      </div>
    );
  }
}
