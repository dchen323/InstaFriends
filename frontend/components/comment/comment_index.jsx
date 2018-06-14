import React from 'react';
import {CommentIndexItem} from './comment_index_item';

export default class CommentIndex extends React.Component{
  constructor(props){
    super(props);
  }

  handleDelete(comment){
    return (e) => {
      e.preventDefault();

    };
  }


  render(){
    let comments =this.props.comments.map(comment => (
      <CommentIndexItem key={comment.id} comment={comment}
        commentAuthor={this.props.commentAuthor[comment.userId]}
        closeModal={this.props.closeModal}
        handleDelete={this.handleDelete}
        pictureAuthorId={this.props.pictureAuthorId}/>
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
