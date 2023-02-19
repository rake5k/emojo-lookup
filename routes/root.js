'use strict'

const { getMain } = require('../controllers/main');
const emojosRepository = require('../repositories/emojos');

module.exports = async function (fastify, opts) {
  fastify.get('/', getMain(emojosRepository));
}
