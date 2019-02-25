import { connect } from "react-redux";
import { fetchFollowers } from "../../actions/follow_actions";
import Welcome from "./welcome";

const mapStateToProps = ({ session: { user }, entities: { users } }) => ({
  currentUser: user
});

const mapDispatchToProps = dispatch => ({
  fetchFollowers: id => dispatch(fetchFollowers(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
