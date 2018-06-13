import * as APIUtil from '../utils/search_api_utils';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';


export const receiveSearch = searchList => {
  return({
    type: RECEIVE_SEARCH,
    searchList
  });

};

export const searchUsers = query => dispatch => (
  APIUtil.searchUsers(query)
    .then(res => dispatch(receiveSearch(res)))
);
