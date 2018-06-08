import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = ({entities: {users, pictures}}, ownProps) =>({
  user: users[ownProps.match.params.userId],
  pictures: pictures
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
