import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const sessionErrorsReducer = (state, action) => {
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return action.err;
    default:
      return null;
  }
};

export default sessionErrorsReducer;
