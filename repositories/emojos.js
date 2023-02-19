'use strict'

module.exports.fetch = (instance) => {
  if (!instance) {
    return [];
  }

  return fetch(`https://${instance}/api/v1/custom_emojis`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    return response.json();
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });
};
