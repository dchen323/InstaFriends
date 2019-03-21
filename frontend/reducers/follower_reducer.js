import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";
import { merge } from "lodash";

const followerReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.followers || {};
    case RECEIVE_FOLLOW:
      newState = merge(newState, { [action.follower.id]: action.follower });
      return newState;
    case REMOVE_FOLLOW:
      delete newState[action.follower.id];
      return newState;
    default:
      return state;
  }
};

export default followerReducer;
