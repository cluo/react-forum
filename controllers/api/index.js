'use strict';
var Router      = require('koa-router');

var api = new Router();

api.get('/register', function* (next) {
  yield this.body = {status: 1};
});

module.exports = api;
