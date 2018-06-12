import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import UserProfile from './user_profile';
import {sortPictures} from '../../reducers/selectors';

const mapStateToProps = ({entities: {users, pictures,follows,
  followed, following}, session}, ownProps) =>({
  user: users[ownProps.match.params.userId],
  pictures: sortPictures(pictures),
  follows: follows,
  followed: followed,
  following: following,
  sessionId: session.id
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
