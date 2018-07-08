import {merge} from 'lodash';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_PICTURE, REMOVE_PICTURE} from '../actions/picture_actions';
import {RECEIVE_FOLLOWERS} from '../actions/follow_actions';

const picturesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.pictures || {};
    case RECEIVE_PICTURE:
      return merge({}, state, {[action.picture.id]: action.picture});
    case RECEIVE_FOLLOWERS:
      return action.pictures || {};
    case REMOVE_PICTURE:
      let newState = merge({},state);
      delete newState[action.pictureId];
      return newState;
    default:
      return state;
  }
};

export default picturesReducer;
