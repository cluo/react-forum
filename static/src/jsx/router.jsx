define([
  'react',
  'utils/router-helper',
  'react-router',
  'pages/home',
  'pages/about',
  'pages/login',
  'pages/register',
], function(
   React,
   RouterHelper,
   ReactRouter,

   HomePage,
   AboutPage,
   LoginPage,
   RegisterPage
) {

  var Route = ReactRouter.Route;
  var DefaultRoute = ReactRouter.DefaultRoute;

  return {
    start: function(App, container) {
      var routes = (
        <Route name="app" path="/" handler={App} >
          <Route name="about" path="/about" handler={AboutPage} />
          <Route name="login" path="/login" handler={LoginPage} />
          <Route name="register" path="/register" handler={RegisterPage} />

          <DefaultRoute handler={HomePage} />
        </Route>
      );

      ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Handler) {
        React.render(<Handler/>, container);
      });
    }
  };
});