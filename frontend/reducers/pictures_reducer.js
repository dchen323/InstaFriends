import {merge} from 'lodash';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_PICTURE, REMOVE_PICTURE} from '../actions/picture_actions';
import {RECEIVE_LIKE,} from '../actions/like_actions';
import {RECEIVE_COMMENT} from '../actions/comment_actions';

const picturesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.pictures;
    case RECEIVE_PICTURE:
      return merge({}, state, {[action.picture.id]: action.picture});
    case RECEIVE_LIKE:
      return merge({}, state, {[action.picture.id]: action.picture});
    case RECEIVE_COMMENT:
      return merge({},state,{[action.picture.id]: action.picture});
    case REMOVE_PICTURE:
      let newState = merge({},state);
      delete newState[action.pictureId];
      return newState;
    default:
      return state;
  }
};

export default picturesReducer;
