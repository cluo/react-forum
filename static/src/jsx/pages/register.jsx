define([
  'react',
  'components/RegisterForm/RegisterForm'
], function(
   React,
   RegisterForm
) {

  var Register = React.createClass({
    render: function() {
      return (
        <div className="row">

          <div className="col-md-9" role="main">
            <h2>用户注册</h2>
            <RegisterForm />
          </div>

          <div className="col-md-3" role="complementary"></div>
        </div>
      );
    }
  });

  return Register;
});