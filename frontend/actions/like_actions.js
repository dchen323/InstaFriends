import * as APIUtil from '../utils/like_api_util';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const createLike = like => dispatch => (
  APIUtil.createLike(like)
    .then(res => dispatch(receiveLike(res)))
);

export const deleteLike = like => dispatch => (
  APIUtil.deleteLike(like)
    .then(res => dispatch(removeLike(res)))
);
