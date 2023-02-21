'use strict';

const { mock, same, test } = require('tap');

const HttpClientMock = require('../mocks/repositories/utils/httpclient');

const repo = mock('../../repositories/emojos', {
  '../../repositories/utils/httpclient': HttpClientMock,
});

const testUrl = async (url) => {
  const actual = await repo.fetchEmojos(url);
  same(actual, HttpClientMock.resultStub);
};

test('urls without protocol should be supported', async () => {
  await testUrl('mymastodon.com');
});

test('http urls should be supported', async () => {
  await testUrl('http://mymastodon.com');
});

test('https urls should be supported', async () => {
  await testUrl('https://mymastodon.com');
});

test('non http/s urls should not be supported', async (t) => {
  t.throws(() => repo.fetchEmojos('webcal://mymastodon.com'));
});
