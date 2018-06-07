import * as APIUtil from '../utils/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
  .then(res => dispatch(receiveUser(res)))
);
