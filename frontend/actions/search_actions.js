import * as APIUtil from '../utils/search_api_utils';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';


export const receiveSearch = users => ({
  type: RECEIVE_SEARCH,
  users
});

export const searchUsers = query => dispatch => (
  APIUtil.searchUsers(query)
    .then(res => dispatch(receiveSearch(res)))
);
