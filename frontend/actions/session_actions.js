import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const removeCurrentUser = (userId) => {
  return {
    type: REMOVE_CURRENT_USER,
    id: userId.id
  };
};

export const receiveSessionErrors = err => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    err: err
  };
};

export const login = user => dispatch => {
  return APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveSessionErrors(err))
  );
};

export const logout = () => dispatch => {
  return APIUtil.logout().then(
    (userId) => dispatch(removeCurrentUser(userId)),
    err => dispatch(receiveSessionErrors(err)));
};
