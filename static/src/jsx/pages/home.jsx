define([
  'react'
], function(
   React
) {

  var Home = React.createClass({
    render: function() {
      return (
        <div className="row">
          <h2>首页</h2>

          <div className="col-md-9" role="main">
          main
          </div>

          <div className="col-md-3" role="complementary">
          complementary
          </div>
        </div>
      );
    }
  });

  return Home;
});