import {connect} from 'react-redux';
import {fetchFollowers} from '../../actions/follow_actions';
import {logout} from '../../actions/session_actions';
import Welcome from './welcome';

const mapStateToProps = ({session, entities: {users}}) => ({
    currentUser: users[session.id]
  });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchFollowers: id => dispatch(fetchFollowers(id))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(Welcome);
