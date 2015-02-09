// config
require.config({
    baseUrl: '/dist/js/',
    paths: {
        'jquery': '/bower/jquery/dist/jquery.min',
        'react': '/bower/react/react',
        'react-router': '/bower/react-router/dist/react-router',
        'react-bootstrap': '/bower/react-bootstrap',
        // utils
        'utils': './utils/',
        // components
        'components': './components/',
        // pages
        'pages': './pages/'
    },
    shim: {
        'react': {
          exports: 'React'
        },
        'react-router': {
          deps: ['react']
        },
        'react-bootstrap': {
          deps: ['react']
        }
    }
});

// app start
require([
  'react',
  'components/navigation',
  './router'
], function(
  React,
  Navigation,
  router
) {

  var container = document.getElementById('page-container');
  // app
  var App = React.createClass({
    render: function () {
      return (
        <Navigation />
      );
    }
  });
  // start router
  router.start(App, container);

});