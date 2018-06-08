import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import UserProfile from './user_profile';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({entities: {users, pictures}}, ownProps) =>({
  user: users[ownProps.match.params.userId],
  pictures: pictures
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
