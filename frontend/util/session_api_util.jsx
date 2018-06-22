export const login = (data) => {
  return fetch('/api/session', {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': window._token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    body: JSON.stringify(data),
    method: 'POST',
    credentials: 'same-origin'
  }).then(response => response.json());
};

export const logout = () => {
  return fetch('/api/session', {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': window._token,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    method: 'DELETE',
    credentials: 'same-origin'
  }).then(response => response.json());
};
