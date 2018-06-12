import {RECEIVE_FOLLOW,
  REMOVE_FOLLOW} from '../actions/follow_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {merge} from 'lodash';

const followReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
    debugger
      return action.follows || {};
    case RECEIVE_FOLLOW:
      return merge({},state, {[action.follows.id]: action.follows});
    case REMOVE_FOLLOW:
      let newState = merge({},state);
      delete newState[action.follows.id];
      return newState;
    default:
    return state;
  }
};

export default followReducer;
