import {connect} from 'react-redux';
import PictureUploadForm from './pic_upload_form';
import {uploadPicture} from '../../actions/picture_actions';


const mapStateToProps = ({session}) => ({
  userId: session.id
});

const mapDispatchToProps = dispatch => ({
  uploadPicture: picture => dispatch(uploadPicture(picture))
});


export default connect(null,mapDispatchToProps)(PictureUploadForm);
