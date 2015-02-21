'use strict';
var fs = require('fs');

// appName
var appName = 'reactForum';

// config
var config = {
  // app info
    appName: appName,
    appTitle: 'ReactJS中文社区',
  // server info
    server: {
      port: 3000
    },
    staticPath: '/static',
  // datebase info
    mongoUrl: 'mongodb://localhost/' + appName,
    redis: {
      host: 'localhost',
      port: 6379
    },
  // passport
    allowSignup: false,
    allowGithubSignup: true,
  // oauth
    oauth: {
      server: {
        protocol: 'http',
        host: 'localhost:3000'
      },
      github: {
        key: '[CONSUMER_KEY]',
        secret: '[CONSUMER_SECRET]',
        callback: '/handle_twitter_callback'
      }
    }
}

module.exports = config;