import { connect } from "react-redux";
import FollowPicture from "./follow_picture";
import { createLike, deleteLike } from "../../actions/like_actions";
import { countLikes, sortPictures } from "../../reducers/selectors";

const mapStateToProps = ({
  entities: { pictures, following, users, likes },
  session: { user }
}) => ({
  pictures: sortPictures(pictures),
  currentUser: user,
  users: following,
  likes: likes
});

const mapDispatchToProps = dispatch => ({
  createLike: like => dispatch(createLike(like)),
  deleteLike: like => dispatch(deleteLike(like))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowPicture);
