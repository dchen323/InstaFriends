import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

import { RECEIVE_FOLLOWERS } from "../actions/follow_actions";
import { merge } from "lodash";

const _nullUser = Object.freeze({
  user: null
  // followed: {}
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const user = action.currentUser;
      const data = {
        id: user.id,
        username: user.username,
        name: user.name,
        imgUrl: user.img_url
      };
      return merge({}, state, { user: data });
    // case RECEIVE_FOLLOWERS:
    //   return merge({}, state, {
    //     followed: action.followed
    //   });
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
