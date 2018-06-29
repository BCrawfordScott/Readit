import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    id
  };
};

const receiveUserErrors = (err) => {
  return {
    type: RECEIVE_USER_ERRORS,
    err
  };
};
