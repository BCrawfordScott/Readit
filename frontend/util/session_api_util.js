import jorFetch from './jor_fetch.js';

export const login = (user) => {
  return jorFetch({
    path: '/api/session',
    method: 'POST',
    data: user
  });
};

export const logout = () => {
  return jorFetch({
    path:'/api/session',
    method: 'DELETE'
  });
};
