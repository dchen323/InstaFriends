import {connect} from 'react-redux';
import CommentForm from './comment_form';
import {postComment, deleteComment} from '../../actions/comment_actions';


const mapStateToProps = ({entities: {user}}, {pictureId}) => ({
  user: user,
  pictureId :pictureId
});

const mapDispatchToProps = dispatch => ({
  postComment: comment => dispatch(postComment(comment))
});

export default connect(mapStateToProps,
    mapDispatchToProps)(CommentForm);
