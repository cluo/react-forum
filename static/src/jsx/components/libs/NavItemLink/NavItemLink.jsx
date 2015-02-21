define([
  'react',
  'react-router',
  'react-bootstrap/NavItem',
  './LinkMixin'
], function(
   React,
   ReactRouter,
   NavItem,
   LinkMixin
) {

  var {Navigation, State} = ReactRouter;

  var NavItemLink = React.createClass({
    mixins: [
      LinkMixin,
      Navigation,
      State
    ],

    render: function() {
      var {
        to,
        params,
        query,
        active,
        ...props} = this.props;

      if (this.props.active === undefined) {
        active = this.isActive(to, params, query);
      }

      return (
        <NavItem {...props}
          href={this.getHref()}
          active={active}
          onClick={this.handleRouteTo}
          ref="navItem">
          {this.props.children}
        </NavItem>
      );
    }
  });

  return NavItemLink;
});