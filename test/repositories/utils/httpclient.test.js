'use strict'

const fetchMock = require('fetch-mock');
const { afterEach, test } = require('tap');

const HttpClient = require('../../../repositories/utils/httpclient');

const baseUrl = 'https://myinstance.org';

afterEach(() => {
  fetchMock.restore();
})

test('should fetch json', async t => {
  const responseStub = { anyKey: 'anyValue' };
  const url = `${baseUrl}/json`;
  fetchMock.mock(url, Promise.resolve(responseStub));

  const actual = await HttpClient.getJson(url);
  t.same(actual, responseStub);
});

test('should not resolve when resource not found', async t => {
  const url = `${baseUrl}/fail`;
  fetchMock.mock(url, 404);
  t.rejects(HttpClient.getJson(url));
});