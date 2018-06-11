import RECEIVE_LIKE from '../actions/like_actions';
import REMOVE_LIKE from '../actions/like_actions';
import {merge} from 'lodash';


const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE:
      return merge({}, state, {[action.like.id]: action.like});
    case REMOVE_LIKE:
      let newState = merge({},state);
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
};

export default likesReducer;
