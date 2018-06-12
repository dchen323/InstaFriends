import {connect} from 'react-redux';
import FollowUserIndex from './follow_user_index';
import {logout} from '../../actions/session_actions';


const mapStateToProps = ({entities: {users, following},session}) => ({
  following: following,
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


export default connect(mapStateToProps,
  mapDispatchToProps)(FollowUserIndex);
