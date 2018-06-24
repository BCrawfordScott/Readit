/////////////////////////////////////////////////////////////////
// Fetch API Wrapper for Ruby on Rails JSON API                //
/////////////////////////////////////////////////////////////////

// Request Body Constructor

const TOKEN = document.querySelector('meta[name="csrf-token"]').content;

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-Token': TOKEN,
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const buildReq = (method, payload) => {
  return {
    headers: headers,
    body: JSON.stringify(payload),
    method: method,
    credentials: 'same-origin'
  };
};

// Response handlers

const formatResponse = (response) => {
  return response.json();
};

const passErr = err => err;

// Fetch API wrapper

export const rorFetch = (path, method = 'GET', payload) => {
  return fetch(path, buildReq(method, payload)).then(formatResponse, passErr);
};
