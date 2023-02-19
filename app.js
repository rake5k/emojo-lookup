'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const Static = require('@fastify/static');
const View = require("@fastify/view");

async function app(fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  });

  fastify.register(Static, {
    root: path.join(__dirname, 'public')
  })

  fastify.register(Static, {
    root: path.join(__dirname, 'node_modules/normalize.css'),
    prefix: '/css/normalize/',
    decorateReply: false
  });

  fastify.register(Static, {
    root: path.join(__dirname, 'node_modules/milligram/dist'),
    prefix: '/css/milligram/',
    decorateReply: false
  });

  // EJS templating engine
  fastify.register(View, {
    engine: {
      ejs: require("ejs"),
    },
  });
}

module.exports = app;
