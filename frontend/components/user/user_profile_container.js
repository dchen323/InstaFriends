import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import UserProfile from "./user_profile";
import { sortPictures } from "../../reducers/selectors";

const mapStateToProps = (
  {
    entities: {
      users,
      pictures,
      followed,
      following,
      followers,
      likes,
      comments
    },
    session: { user }
  },
  ownProps
) => ({
  user: users[ownProps.match.params.userId],
  pictures: sortPictures(pictures),
  followed: followed,
  following: following,
  followers,
  sessionId: user.id,
  likes: likes,
  comments: comments
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
