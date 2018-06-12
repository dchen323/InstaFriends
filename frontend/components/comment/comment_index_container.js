import {connect} from 'react-redux';
import CommentIndex from './comment_index';
import {sortComments} from '../../reducers/selectors';

const mapStateToProps = ({entities: {comments,commentAuthor}}, {pictureId,
  stylefill}) => {
return({
  comments: sortComments(comments,pictureId),
  commentAuthor: commentAuthor
});
};


export default connect(mapStateToProps)(CommentIndex);
