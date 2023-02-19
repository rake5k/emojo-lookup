'use strict'

const {mock, test} = require('tap');

const HttpClientMock = require('../mocks/repositories/utils/httpclient');

const repo = mock('../../repositories/emojos', {
  '../../repositories/utils/httpclient': HttpClientMock,
})

test('emojos can be fetched from a valid url', async t => {
  const actual = await repo.fetchEmojos('mymastodon.com');
  t.same(actual, HttpClientMock.resultStub);
});
