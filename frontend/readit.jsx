import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  console.log('loading?')
  debugger
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
    debugger
    store = configureStore();
  }

  window.getState = store.getState;
  window.login = login;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
