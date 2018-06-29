import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer';

const _defaultState = {
  session: {id: null},
  entities: {},
  errors: {}
};

const configureStore = (preloadedState = _defaultState) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
