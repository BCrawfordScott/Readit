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

const formatResponse = async (response) => {
  if (response.status >= 400) {
    throw new Error(await response.json())
  }

  return response.json();
};

// Fetch API wrapper

const jorFetch = async (options) => {
  return await fetch(
    options.path,
    buildReq(options.method, options.data)
  ).then(formatResponse);
};

export default jorFetch;
