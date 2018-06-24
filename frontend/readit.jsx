import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout } from './actions/session_actions';
import { createUser } from './actions/user_actions';
import { fetchUser } from './util/user_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING//
  window.getState = store.getState;
  window.login = (user) => store.dispatch(login(user));
  window.logout = () => store.dispatch(logout());
  window.createUser = (user) => store.discatch(createUser(user));
  window.fetchUser = fetchUser;
  //TESTING//

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
