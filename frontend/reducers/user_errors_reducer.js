import {
  RECEIVE_USER_ERRORS
} from "../actions/user_actions";

const sessionErrorsReducer = (state, action) => {
  switch(action.type){
    case RECEIVE_USER_ERRORS:
      return action.err;
    default:
      return [];
  }
};

export default sessionErrorsReducer;
