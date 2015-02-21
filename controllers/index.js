'use strict';
// controllers
var koaMount    =   require('koa-mount');

var web = require('./web');
var api = require('./api');
//var apiExtend   =   require('./concern/apiExtend');

module.exports = function(app) {
  // mount web
  app.use(koaMount('/',     web.middleware()));
  // mount api
  // app.use(apiExtend());
  app.use(koaMount('/api',  api.middleware()));
  app.use(koaMount('/api',  function * () {
    this.body = {status: 0, msg: 'api not found'};
  }));

  // not found
  app.use(function *(next) {
    yield this.render('pc/index', {'appTitle': global.appTitle}, true);
  });
};