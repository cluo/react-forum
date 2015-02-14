define([
  'react',
  'react-router',
  './PostItem'
], function(
   React,
   ReactRouter,
   PostItem
) {

  var PostList = React.createClass({
    render: function() {
      return (
        <div className="post-list">
          <PostItem postId="1000"/>
          <PostItem postId="1001"/>
          <PostItem postId="1002"/>
          <PostItem postId="1003"/>
          <PostItem postId="1004"/>
          <PostItem postId="1005"/>
          <PostItem postId="1006"/>
          <PostItem postId="1007"/>
          <PostItem postId="1008"/>
          <PostItem postId="1009"/>
          <PostItem postId="1010"/>
        </div>
      );
    }
  });

  return PostList;
});