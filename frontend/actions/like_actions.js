import * as APIUtil from '../utils/like_api_util';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


export const receiveLike = ({likes}) => ({
  type: RECEIVE_LIKE,
  likes
});

export const removeLike = ({likes}) => ({
  type: REMOVE_LIKE,
  likes
});

export const createLike = id => dispatch => (
  APIUtil.createLike(id)
    .then(res => dispatch(receiveLike(res)))
);

export const deleteLike = like => dispatch => (
  APIUtil.deleteLike(like)
    .then(res => dispatch(removeLike(res)))
);
