import {connect} from 'react-redux';
import PictureIndex from './picture_index';
import {fetchPicture, updatePicture} from '../../actions/picture_actions';


const mapStateToProps = ({entities: {pictures,users},session},{pictureId,userId}) =>({
  picture: pictures[pictureId],
  user: users[userId],
  sessionId: session.id
});


const mapDispatchToProps = dispatch => ({
  fetchPicture: (userId, pictureId) => dispatch(fetchPicture(
    userId, pictureId
  )),
  updatePicture: picture => dispatch(updatePicture(picture))

});



export default connect(mapStateToProps,mapDispatchToProps)(PictureIndex);
