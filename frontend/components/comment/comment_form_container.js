import {connect} from 'react-redux';
import CommentForm from './comment_form';
import {postComment} from '../../actions/comment_actions';


const mapStateToProps = ({entities: {comments, user}}, {pictureId}) => ({
  comments: comments,
  user: user,
  pictureId :pictureId
});

const mapDispatchToProps = dispatch => ({
  postComment: comment => dispatch(postComment(comment))
});

export default connect(mapStateToProps,
    mapDispatchToProps)(CommentForm);
