import {connect} from 'react-redux';
import EditPictureForm from './edit_picture_form';
import updatePicture from '../../actions/picture_actions';

const mapStateToProps = ({entities : {pictures}}, {pictureId}) => ({
  picture: pictures[pictureId]
});

const mapDispatchToProps = dispatch => ({
  updatePicture: picture => dispatch(updatePicture(picture))
});
