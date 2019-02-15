import { RECEIVE_USER } from "../actions/user_actions";
import { merge } from "lodash";

const followerReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.followers || {};
    default:
      return state;
  }
};

export default followerReducer;
