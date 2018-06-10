import {connect} from 'react-redux';
import EditPictureForm from './edit_picture_form';
import {updatePicture} from '../../actions/picture_actions';

const mapStateToProps = (state, {picture,disabled, user}) => ({
  picture: picture,
  user: user,
  disabled: disabled
});

const mapDispatchToProps = dispatch => ({
  updatePicture: picture => dispatch(updatePicture(picture))
});


export default connect(mapStateToProps,
  mapDispatchToProps)(EditPictureForm);
