define([
  'react',
  'react-router'
], function(
   React,
   ReactRouter
) {

  var Link = ReactRouter.Link;

  var PostItem = React.createClass({
    render: function() {
      var postId = this.props.postId;
      return (
        <div className="post-item">
          <Link className="last-time pull-right" to="post" params={{postId: postId}}>
            <span className="last-active-time">9小时前</span>
          </Link>

           <Link className="post-title" to="post" params={{postId: postId}}>
            Reactjs中文版翻译，中文社区，赶紧来看看 {this.props.postId}
           </Link>
        </div>
      );
    }
  });

  return PostItem;
});