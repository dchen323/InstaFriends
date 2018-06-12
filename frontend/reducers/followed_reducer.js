import {RECEIVE_FOLLOW,
  REMOVE_FOLLOW} from '../actions/follow_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {merge} from 'lodash';

const followedReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.followed || {};
    case RECEIVE_FOLLOW:
      return merge({},state, {[action.followed.id]: action.followed});
    case REMOVE_FOLLOW:
      let newState = merge({},state);
      delete newState[action.followed.id];
      return newState;
    default:
    return state;
  }
};

export default followedReducer;
