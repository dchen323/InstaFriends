import {connect} from 'react-redux';
import PictureIndex from './picture_index';
import {fetchPicture, deletePicture} from '../../actions/picture_actions';


const mapStateToProps = ({entities: {pictures,users},session},{pictureId,userId}) =>({
  picture: pictures[pictureId],
  user: users[userId],
  sessionId: session.id
});


const mapDispatchToProps = dispatch => ({
  fetchPicture: (userId, pictureId) => dispatch(fetchPicture(
    userId, pictureId
  )),
  deletePicture: picture => dispatch(deletePicture(picture))
});



export default connect(mapStateToProps,mapDispatchToProps)(PictureIndex);
