import { connect } from "react-redux";
import PictureIndex from "./picture_index";
import { fetchPicture, deletePicture } from "../../actions/picture_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { sortLikes, countLikes } from "../../reducers/selectors";

const mapStateToProps = (
  { entities: { pictures, users, likes }, session: { user } },
  { pictureId, userId }
) => ({
  picture: pictures[pictureId],
  user: users[userId],
  likes: sortLikes(likes, user.id, pictureId) || false,
  sessionId: user.id,
  likeCount: countLikes(likes, pictureId)
});

const mapDispatchToProps = (dispatch, { closeModal }) => ({
  fetchPicture: (userId, pictureId) =>
    dispatch(fetchPicture(userId, pictureId)),
  deletePicture: picture => dispatch(deletePicture(picture)),
  createLike: like => dispatch(createLike(like)),
  deleteLike: like => dispatch(deleteLike(like)),
  closeModal: () => closeModal()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PictureIndex);
