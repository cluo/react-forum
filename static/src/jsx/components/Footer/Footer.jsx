define([
  'react',
  'react-router'
], function(
   React,
   ReactRouter
) {

  var Link = ReactRouter.Link;

  var Footer = React.createClass({
    render: function() {
      return (
        <footer id="footer">
          <div className="container">
            <a href="javascript:;">ReactJS中文社区</a>|
            <a href="https://github.com/reactjs-cn/react-forum" target="_blank">源码地址</a>
          </div>
        </footer>
      );
    }
  });

  return Footer;
});