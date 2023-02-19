'use strict'

const resultStub = [{
  static_url: 'https://mymastodon.com/nyancat.png',
  shortcode: 'nyancat',
}];

const getJson = () => resultStub;

module.exports = {
  getJson,
  resultStub,
};
