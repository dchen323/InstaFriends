import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({entities: {users} ,session}, ownProps) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
