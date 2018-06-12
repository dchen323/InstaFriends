import {connect} from 'react-redux';
import FollowItem from './follow_item';
import {createFollow,deleteFollow} from '../../actions/follow_actions';
import {filterFollows} from '../../reducers/selectors';

const mapStateToProps = ({entities: {followed},session},{currentUser}) => ({
  followed: filterFollows(followed, session.id),
  currentUser: currentUser
});

const mapDispatchToProps = dispatch => ({
  createFollow: id => dispatch(createFollow(id)),
  deleteFollow: follow => dispatch(deleteFollow(follow))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(FollowItem);
