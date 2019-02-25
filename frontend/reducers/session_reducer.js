import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

import { RECEIVE_FOLLOWERS } from "../actions/follow_actions";
import { merge } from "lodash";

const _nullUser = Object.freeze({
  id: null,
  followed: {},
  follows: {}
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { id: action.currentUser.id });
    case RECEIVE_FOLLOWERS:
      return merge({}, state, {
        followed: action.followed,
        follows: action.follows
      });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
