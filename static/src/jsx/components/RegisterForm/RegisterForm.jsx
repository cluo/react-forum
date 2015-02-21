define([
  'jquery',
  'react',
  'react-router',
  'actions/AuthAction',
  'components/RegisterForm/RegisterFormItem',
  'essage',
], function(
   $,
   React,
   ReactRouter,
   AuthAction,
   RegisterFormItem
) {

  var Link = ReactRouter.Link;

  var RegisterForm = React.createClass({
    checkForm: function(){
        // React.Children.forEach(this, function(){
        //   console.log(1);
        // });
        return true;
    },
    _onSubmit: function(e){
      e.preventDefault();
      if(this.checkForm()){
        alert('ok');
        //AuthAction.register()
      }else{
        alert('error');
      }
    },
    render: function() {
      return (
        <form className="register-form" onSubmit={this._onSubmit}>
          <RegisterFormItem name="email" placeholder="请输入邮箱" pattern="^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+" />
          <RegisterFormItem name="username" placeholder="请输入用户名" pattern="^[a-zA-z][a-zA-Z0-9_]{2,18}$" />
          <RegisterFormItem type="password" name="password" placeholder="请输入密码" pattern="^[a-zA-Z]\w{5,17}$"/>
          <RegisterFormItem type="password" name="repassword" placeholder="请再次输入密码" pattern="^[a-zA-Z]\w{5,17}$"/>
          <div className="form-item">
            <button type="submit" className="btn btn-primary">注 册</button>
          </div>
        </form>
      );
    }
  });

  return RegisterForm;
});