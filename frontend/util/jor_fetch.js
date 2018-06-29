//////////////////////////////////////////////////////////////////
// Fetch API Wrapper for Ruby on Rails JSON API (JSON on RAILS) //
//////////////////////////////////////////////////////////////////

// Request Body Constructor

const TOKEN = document.querySelector('meta[name="csrf-token"]').content;

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-Token': TOKEN,
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const buildReq = (method = 'GET', payload) => {
  return {
    headers: headers,
    body: JSON.stringify(payload),
    method: method,
    credentials: 'same-origin'
  };
};

// Response handler

const formatResponse = (response) => {
  if (!response.ok) {
    return response.json().then(error => {
      return Promise.reject(error);
    });
  } else {
    return response.json();
  }
};

// Fetch API wrapper

const jorFetch = (options) => {
  return fetch(
    options.path,
    buildReq(options.method, options.data)
  ).then(formatResponse);
};

export default jorFetch;
