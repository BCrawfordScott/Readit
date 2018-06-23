const _nullUser = {
  user: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default sessionReducer;
