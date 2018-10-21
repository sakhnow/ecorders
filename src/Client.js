/* eslint-disable no-undef */
function search(query, cb) {
  return fetch(`data/list?filters=33`, {
    method: "POST",
    accept: "application/json",
    headers: {
      'X-Auth-Token': 'anfgkafgjklnaio;serqwgertgasjhfbas',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { search };
export default Client;
