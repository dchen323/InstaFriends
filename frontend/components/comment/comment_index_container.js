import {connect} from 'react-redux';
import CommentIndex from './comment_index';
import {sortComments} from '../../reducers/selectors';

const mapStateToProps = (state, {pictureId}) => ({
  comments: sortComments(state,pictureId)
});
