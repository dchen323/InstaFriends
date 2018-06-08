import {connect} from 'react-redux';
import PictureUploadForm from './pic_upload_form';
import {uploadPicture} from '../../actions/picture_actions';

const mapDispatchToProps = (dispatch,ownParams) => ({
  uploadPicture: picture => dispatch(uploadPicture)
});


export default connect(null,mapDispatchToProps)(PictureUploadForm);
