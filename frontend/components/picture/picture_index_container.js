import {connect} from 'react-redux';
import PictureIndex from './picture_index';
import {fetchPicture} from '../../actions/picture_actions';


const mapStateToProps = ({entities: {pictures,users}},{pictureId,userId}) =>({
  picture: pictures[pictureId],
  user: users[userId]
});


const mapDispatchToProps = dispatch => ({
  fetchPicture: (userId, pictureId) => dispatch(fetchPicture(
    userId, pictureId
  ))
});



export default connect(mapStateToProps,mapDispatchToProps)(PictureIndex);
