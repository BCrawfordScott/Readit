import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(newState, { [action.currentUser.id]: action.currentUser });
    case REMOVE_CURRENT_USER:
      return Object.assign(newState, { [action.id]: null });
    default:
      return state;
  }
};

export default usersReducer;
