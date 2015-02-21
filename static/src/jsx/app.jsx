// config
require.config({
    baseUrl: '/dist/js/',
    paths: {
        'jquery': '/bower/jquery/dist/jquery.min',
        'essage': '/bower/essage/src/essage',
        'react': '/bower/react/react-with-addons',
        'react-router': '/bower/react-router/dist/react-router',
        'react-bootstrap': '/bower/react-bootstrap',

        'flux': '/bower/flux/dist/Flux',

        'utils': './utils/',
        'components': './components/',
        'dispatcher': './dispatcher/',
        'actions': './actions/',
        'stores': './stores/',
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
  'react-router',
  './router',
  'components/Header/Header',
  'components/Footer/Footer',
], function (
  $,
  React,
  ReactRouter,
  router,
  Header,
  Footer
) {

  var RouteHandler = ReactRouter.RouteHandler;

  // app
  var App = React.createClass({
    render: function(){
      return (
        <div id="page-container">
          <Header />
          <div id="main-container" className="container">
            <RouteHandler />
          </div>
          <Footer />
        </div>
      );
    }
  });

  // start router
  router.start(App, $('body').get(0));

});