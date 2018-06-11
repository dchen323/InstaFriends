import {connect} from 'react-redux';
import PictureIndex from './picture_index';
import {fetchPicture, deletePicture} from '../../actions/picture_actions';
import {createLike, deleteLike} from '../../actions/like_actions';
import {sortLikes} from '../../reducers/selectors';


const mapStateToProps = ({entities: {pictures,users,likes},session},{pictureId,userId}) =>({
  picture: pictures[pictureId],
  user: users[userId],
  likes: sortLikes(likes,session.id,pictureId) || false,
  sessionId: session.id
});


const mapDispatchToProps = dispatch => ({
  fetchPicture: (userId, pictureId) => dispatch(fetchPicture(
    userId, pictureId
  )),
  deletePicture: picture => dispatch(deletePicture(picture)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: like => dispatch(deleteLike(like))
});



export default connect(mapStateToProps,mapDispatchToProps)(PictureIndex);
