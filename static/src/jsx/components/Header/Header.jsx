define([
  'react',
  'react-router',
  'react-bootstrap/Navbar',
  'react-bootstrap/Nav',
  'components/libs/NavItemLink/NavItemLink'
], function(
   React,
   ReactRouter,
   Navbar,
   Nav,
   NavItemLink
) {

  var Link = ReactRouter.Link;
  var RouteHandler = ReactRouter.RouteHandler;

  var Header = React.createClass({
    render: function() {
      return (
        <Navbar id="header">
          <Link className="navbar-brand" to="app">
            <img className="nav-logo" src="/dist/images/logo.svg" width="36" height="36"/>
            Reactjs 中文社区
          </Link>
          <Nav className="pull-right">
            <NavItemLink to="about">关于</NavItemLink>
            <NavItemLink to="login">登陆</NavItemLink>
            <NavItemLink to="register">注册</NavItemLink>
          </Nav>
        </Navbar>
      );
    }
  });

  return Header;
});