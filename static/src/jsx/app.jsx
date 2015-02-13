// config
require.config({
    baseUrl: '/dist/js/',
    paths: {
        'jquery': '/bower/jquery/dist/jquery.min',
        'react': '/bower/react/react-with-addons',
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
        'react-router': {
          deps: ['react', 'utils/router-helper']
        }
    }
});

// app start
require([
  'jquery',
  'react',
  'components/Navigation/Navigation',
  'react-router',
  './router'
], function (
  $,
  React,
  Navigation,
  ReactRouter,
  router
) {

  var RouteHandler = ReactRouter.RouteHandler;

  // app
  var App = React.createClass({
    render: function(){
      return (
        <div id="page-container">
          <Navigation />
          <div id="main-container" className="container">
            <RouteHandler />
          </div>
        </div>
      );
    }
  });

  // start router
  router.start(App, $('body').get(0));

});