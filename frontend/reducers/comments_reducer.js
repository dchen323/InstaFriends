import {RECEIVE_PICTURE} from '../actions/picture_actions';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_FOLLOWERS} from '../actions/follow_actions';
import {merge} from 'lodash';


const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge({},state, {[action.comments.id]: action.comments});
    case REMOVE_COMMENT:
      let newState = merge({},state);
      delete newState[action.comments.id];
      return newState;
    case RECEIVE_USER:
      return action.comments || {};
    case RECEIVE_FOLLOWERS:
      return action.comments || {};
    default:
      return state;
  }
};

export default commentsReducer;
