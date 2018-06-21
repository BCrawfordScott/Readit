export const login = (data) => {
  return fetch('/api/session', {
    body: JSON.stringify(data),
    method: 'POST',
    credentials: 'same-origin'
  }).then(response => response.json());
};
