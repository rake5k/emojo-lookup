'use strict';

const httpClient = require('./utils/httpclient');

const addProtocolFallback = (string) => {
  const hasProtocol = string.includes('://');
  return hasProtocol ? string : `https://${string}`;
};

const validatedUrl = (string) => {
  const url = new URL(addProtocolFallback(string));
  if (url.protocol === 'http:' || url.protocol === 'https:') {
    return url;
  }
  throw new Error('Argument is not a HTTP/S URL!');
};

const fetchEmojos = (instance) => {
  const url = validatedUrl(instance);
  const emojoApi = new URL(`/api/v1/custom_emojis`, url);
  return httpClient.getJson(emojoApi);
};

module.exports = {
  fetchEmojos,
};
