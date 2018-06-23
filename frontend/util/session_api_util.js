import headers from './header_config.js';

export const login = (data) => {
  return fetch('/api/session', {
    headers: headers,
    body: JSON.stringify(data),
    method: 'POST',
    credentials: 'same-origin'
  }).then(response => response.json());
};

export const logout = () => {
  return fetch('/api/session', {
    headers: headers,
    method: 'DELETE',
    credentials: 'same-origin'
  }).then(response => response.json());
};
