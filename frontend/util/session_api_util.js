import { rorFetch } from './ror_fetch.js';

export const login = (user) => {
  return rorFetch('/api/session', 'POST', user);
};

export const logout = () => {
  return rorFetch('/api/session', 'DELETE');
};
