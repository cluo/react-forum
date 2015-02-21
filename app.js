'use strict';
// app.js
var koa           = require('koa');                   // koa
var koaStatic     = require('koa-static');            // static server
var koaLogger     = require('koa-logger');            // loger
var koaSession    = require('koa-generic-session');   // section
var koaRedis      = require('koa-redis');             // redis
var koaFavicon    = require('koa-favicon');           // favicon
var koaBody       = require('koa-body');              // body
var koaOverride   = require('koa-methodoverride');    // methodoverride
var koaEtag       = require('koa-etag');              // etag
var koaGzip       = require('koa-gzip');              // gzip
var koaHandlebars = require('koa-hbs');               // handlebars

require('./global')(__dirname); // Load data to global

var config = global.config;
var app    = koa();

// Configurations
app.use(koaFavicon(config.staticPath + '/dist/favicon.ico'));
app.use(koaLogger());
app.use(koaGzip());
app.use(koaEtag());
app.use(koaStatic(config.staticPath));
app.use(koaBody());
app.use(koaOverride('_method'));
app.use(koaSession({
  store: koaRedis({
         host: config.redis.host,
         port: config.redis.port
       })
}));
app.use(koaHandlebars.middleware({
  viewPath: __dirname + '/views',
  debug: true,
  pretty: true,
  compileDebug: true
}));

// Load
require('./services')(app); // Load services
require('./controllers')(app); // Load controllers

// Start server
app.listen(config.server.port, function() {
  console.log('Koa is listening to http://localhost:3000');
});