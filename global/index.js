'use strict';
var config = require('../config');

module.exports = function(dirname) {
  // Set data
  config.staticPath = dirname + config.staticPath;

  // Load data into global
  global.config   = config;
  global.appName  = config.appName;
  global.appTitle = config.appTitle;
}
