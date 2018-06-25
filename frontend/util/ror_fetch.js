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

// Response handler

const formatResponse = async (response) => {
  if (response.status >= 400) {
    throw new Error(await response.json())
  }

  return response.json();
};

// Fetch API wrapper

const rorFetch = async (path, method = 'GET', payload) => {
  return await fetch(path, buildReq(method, payload)).then(formatResponse);
};

export default rorFetch;
