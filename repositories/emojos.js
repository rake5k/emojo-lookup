'use strict'

const httpClient = require('./utils/httpclient');

const fetchEmojos = instance => {
  return httpClient.getJson(`https://${instance}/api/v1/custom_emojis`);
};

module.exports = {
  fetchEmojos,
};
