'use strict';

const { test, todo } = require('tap');

const { build } = require('../helper');
const { Instance } = require('../mocks/repositories/emojos');

test('should render initially', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: '/',
  });

  t.equal(res.statusCode, 200);
  t.ok(res.payload.includes('<h1>Emojo Lookup</h1>'));
  t.notOk(res.payload.includes('<hr/>'));
});

test('should render successful lookup with results', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: '/',
    query: {
      i: Instance.Empty,
    },
  });

  t.equal(res.statusCode, 200);
  t.ok(res.payload.includes('<h1>Emojo Lookup</h1>'));
  t.ok(res.payload.includes('<hr/>'));
  t.ok(res.payload.includes('<h2>Bonkers!</h2>'));
});

test('should render successful lookup without results', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: '/',
    query: {
      i: Instance.Good,
    },
  });

  t.equal(res.statusCode, 200);
  t.ok(res.payload.includes('<h1>Emojo Lookup</h1>'));
  t.ok(res.payload.includes('<hr/>'));
  t.ok(res.payload.includes('<h2>Emojos everywhere!</h2>'));
});

test('should render failed lookup', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: '/',
    query: {
      i: Instance.Fail,
    },
  });

  t.equal(res.statusCode, 200);
  t.ok(res.payload.includes('<h1>Emojo Lookup</h1>'));
  t.ok(res.payload.includes('<hr/>'));
  t.ok(res.payload.includes('<h2>Oh snap!</h2>'));
});
