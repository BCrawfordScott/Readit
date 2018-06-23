const TOKEN = document.querySelector('meta[name="csrf-token"]').content;

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-Token': TOKEN,
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export default headers;
