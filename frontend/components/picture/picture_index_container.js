import {connect} from 'react-redux';
import PictureIndex from './picture_index';


const mapStateToProps = ({entities: {pictures}}, ownProps) => ({
  pictures: pictures
});



export default connect(mapStateToProps)(PictureIndex);
