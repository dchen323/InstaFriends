import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_FOLLOWERS} from '../actions/follow_actions';
import {merge} from 'lodash';

const followingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.following || {};
    case RECEIVE_FOLLOWERS:
      return action.following || {};
    default:
      return state;
  }
};

export default followingReducer;
