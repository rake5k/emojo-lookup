'use strict'

const Instance = {
  Fail: 'failtodon.org',
  Empty: 'emptydon.org',
  Good: 'anydon.org',
}

const fetchEmojos = instance => {
  if (!instance) {
    return null;
  }

  if (instance === Instance.Empty) {
    return Promise.resolve([]);
  }

  if (instance === Instance.Fail) {
    return Promise.reject();
  }

  return Promise.resolve([{
    static_url: 'https://mymastodon.com/nyancat.png',
    shortcode: 'nyancat',
  }]);
};

module.exports = {
  fetchEmojos,
  Instance,
};