'use strict';
// web/index.js
var Router  =   require('koa-router');

var web = new Router();

web.get('/', function * (next) {
   yield this.render('pc/index', {'appTitle': global.appTitle}, true);
});

module.exports = web;