import * as APIUtil from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = currentUser => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = user => dispatch =>
  APIUtil.signup(user).then(
    res => dispatch(receiveCurrentUser(res)),
    res => {
      dispatch(receiveErrors(res.responseJSON));
    }
  );
//add errors to rest of the thunk calls
export const login = user => dispatch =>
  APIUtil.login(user).then(
    res => dispatch(receiveCurrentUser(res)),
    res => dispatch(receiveErrors(res.responseJSON))
  );

export const logout = () => dispatch =>
  APIUtil.logout().then(
    res => dispatch(logoutCurrentUser()),
    res => dispatch(receiveErrors(res.responseJSON))
  );
