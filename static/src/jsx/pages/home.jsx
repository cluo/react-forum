define([
  'react'
], function(
   React
) {

  var Home = React.createClass({
    render: function() {
      return (
        <div class="row">
          <h2>首页</h2>

          <div class="col-md-9" role="main">
          main
          </div>

          <div class="col-md-3" role="complementary">
          complementary
          </div>
        </div>
      );
    }
  });

  return Home;
});