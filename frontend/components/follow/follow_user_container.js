import { connect } from "react-redux";
import FollowUserIndex from "./follow_user_index";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({
  entities: { users, following },
  session: { user }
}) => ({
  following: following,
  currentUser: user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowUserIndex);
