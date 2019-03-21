import * as APIUtil from "../utils/follow_api_util";
export const RECEIVE_FOLLOWERS = "RECEIVE_FOLLOWERS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollowers = ({
  users,
  pictures,
  comments,
  likes,
  commentsAuthor,
  following,
  followed
}) => ({
  type: RECEIVE_FOLLOWERS,
  users,
  pictures,
  comments,
  likes,
  commentsAuthor,
  following,
  followed
});

const receiveFollow = ({ followed, follower }) => ({
  type: RECEIVE_FOLLOW,
  followed,
  follower
});
const removeFollow = ({ followed, follower }) => ({
  type: REMOVE_FOLLOW,
  followed,
  follower
});

export const fetchFollowers = id => dispatch =>
  APIUtil.fetchFollowers(id).then(res => dispatch(receiveFollowers(res)));

export const createFollow = id => dispatch =>
  APIUtil.createFollow(id).then(res => dispatch(receiveFollow(res)));

export const deleteFollow = follow => dispatch =>
  APIUtil.deleteFollow(follow).then(res => dispatch(removeFollow(res)));
