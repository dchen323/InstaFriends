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

const mapDispatchToProps = (dispatch, {closeModal}) => ({
  closeModal: () => closeModal()
});


export default connect(mapStateToProps,
  mapDispatchToProps)(CommentIndex);
