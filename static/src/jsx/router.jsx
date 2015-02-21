define([
  'react',
  'utils/router-helper',
  'react-router',
  'pages/home',
  'pages/about',
  'pages/login',
  'pages/register',
  'pages/post-detail',
], function(
   React,
   RouterHelper,
   ReactRouter,

   HomePage,
   AboutPage,
   LoginPage,
   RegisterPage,
   PostDetailPage
) {

  var Route = ReactRouter.Route;
  var DefaultRoute = ReactRouter.DefaultRoute;
  var NotFoundRoute = ReactRouter.NotFoundRoute;

  return {
    start: function(App, container) {
      var routes = (
        <Route name="app" path="/" handler={App} >
          <Route name="about" path="about" handler={AboutPage} />
          <Route name="login" path="login" handler={LoginPage} />
          <Route name="register" path="register" handler={RegisterPage} />
          <Route name="post" path="post/:postId" handler={PostDetailPage} />
          <DefaultRoute handler={HomePage} />
          <NotFoundRoute handler={HomePage}/>
        </Route>
      );

      ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Handler) {
        React.render(<Handler/>, container);
      });
    }
  };
});