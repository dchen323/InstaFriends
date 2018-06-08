import {merge} from 'lodash';
import {RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_PICTURE} from '../actions/picture_actions';

const picturesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.pictures;
    case RECEIVE_PICTURE:
      return merge({}, state, {[action.picture.id]: action.picture});
    default:
      return state;
  }
};

export default picturesReducer;
