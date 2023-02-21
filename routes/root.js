'use strict';

const { getMain } = require('../controllers/main');
const emojosRepositoryMock = require('../test/mocks/repositories/emojos');
const emojosRepository = require('../repositories/emojos');

module.exports = async function (fastify, opts) {
  const repo = opts.isTest ? emojosRepositoryMock : emojosRepository;
  fastify.get('/', getMain(repo));
};
