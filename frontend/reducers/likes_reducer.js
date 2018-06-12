import {RECEIVE_LIKE, REMOVE_LIKE} from '../actions/like_actions';
import {RECEIVE_PICTURE} from '../actions/picture_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_FOLLOWERS} from '../actions/follow_actions';
import {merge} from 'lodash';


const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE:
      return merge({}, state, {[action.likes.id]: action.likes});
    case REMOVE_LIKE:
      let newState = merge({},state);
      delete newState[action.likes.id];
      return newState;
    case RECEIVE_PICTURE:
      return action.likes || {};
    case RECEIVE_USER:
      return action.likes || {};
    case RECEIVE_FOLLOWERS:
      return action.likes || {};
    default:
      return state;
  }
};

export default likesReducer;
