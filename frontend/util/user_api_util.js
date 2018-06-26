import jorFetch from './jor_fetch.js';

export const fetchUser = (id) => {
  return jorFetch({
    path: `/api/users/${id}`
  });
};

export const createUser = (user) => {
  return jorFetch({
    path: "/api/users",
    method: 'POST',
    data: { user }
  });
};

export const updateUser = (user) => {
  return jorFetch({
    path: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  });
};

export const deleteUser = (id) => {
  return jorFetch({
    path: `/api/users/${id}`,
    method: 'DELETE',
    data: id
  });
};
