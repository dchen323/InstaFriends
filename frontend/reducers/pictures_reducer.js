import {merge} from 'lodash';
import {RECEIVE_USER} from '../actions/user_actions';

const picturesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.pictures;
    default:
      return state;
  }
};

export default picturesReducer;
