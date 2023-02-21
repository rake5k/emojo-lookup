'use strict';

function getJson(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  });
}

module.exports = {
  getJson,
};
