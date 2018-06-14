import {connect} from 'react-redux';
import CommentIndex from './comment_index';
import {sortComments} from '../../reducers/selectors';
import {deleteComment} from '../../actions/comment_actions';

const mapStateToProps = ({entities: {comments,commentAuthor}}, {picture,
  stylefill}) => ({
    comments: sortComments(comments,picture.id),
    commentAuthor: commentAuthor,
    pictureAuthorId:  picture.userId
});

const mapDispatchToProps = dispatch => ({
  deleteComment: comment => dispatch(deleteComment(comment))
});


export default connect(mapStateToProps,
  mapDispatchToProps)(CommentIndex);
