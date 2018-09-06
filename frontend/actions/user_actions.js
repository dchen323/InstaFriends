import * as APIUtil from "../utils/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveUser = ({
  user,
  pictures,
  likes,
  comments,
  followed,
  following,
  commentsAuthor
}) => ({
  type: RECEIVE_USER,
  user,
  pictures,
  likes,
  comments,
  followed,
  commentsAuthor,
  following
});

export const fetchUser = id => dispatch =>
  APIUtil.fetchUser(id).then(res => dispatch(receiveUser(res)));
