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

  return {
    start: function(App, container) {
      routes = (
        <Route>
          <Route handler={App} >
            <Route name='about' path='/about' handler={AboutPage} />
          </Route>
        </Route>
      );

      ReactRouter.run(routes, ReactRouter.HistoryLocation, function(Handler) {
        React.render(<Handler/>, container);
      });
    }
  };
});