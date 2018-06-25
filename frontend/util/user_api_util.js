import rorFetch from './ror_fetch.js';

export const fetchUser = (id) => {
  return rorFetch(`/api/users/${id}`);
};

export const createUser = (user) => {
  return rorFetch("/api/users", 'POST', user);
};

export const updateUser = (user) => {
  return rorFetch(`/api/users/${user.id}`, 'PATCH', user);
};

export const deleteUser = (id) => {
  return rorFetch(`/api/users/${id}`, 'DELETE', id);
};
