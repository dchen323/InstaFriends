import {merge} from 'lodash';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_FOLLOWERS} from '../actions/follow_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_USER:
      return merge({},state, {[action.user.id]: action.user});
    case RECEIVE_FOLLOWERS:
      return action.users || {};
    default:
      return state;
  }
};

export default usersReducer;
