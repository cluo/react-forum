define([
  'react',
  'utils/router-helper',
  'react-router',
  'pages/about',
], function(
   React,
   RouterHelper,
   ReactRouter,
   AboutPage
) {

  var Route = ReactRouter.Route;
  var DefaultRoute = ReactRouter.DefaultRoute;

  return {
    start: function(App, container) {
      var routes = (
        <Route name="app" path="/" handler={App} >
          <Route name='about' path='/about' handler={AboutPage} />
        </Route>
      );

      ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Handler) {
        React.render(<Handler/>, container);
      });
    }
  };
});