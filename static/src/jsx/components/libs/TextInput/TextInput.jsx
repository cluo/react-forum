define([
  'react',
], function(
   React
) {

  var ReactPropTypes = React.PropTypes;

  var TextInput = React.createClass({

    propTypes: {
      name: ReactPropTypes.string,
      type: ReactPropTypes.string,
      placeholder: ReactPropTypes.string,
      value: ReactPropTypes.string,
      autoFocus: ReactPropTypes.bool,
      pattern: ReactPropTypes.string,
      required: ReactPropTypes.bool,
      onChange: ReactPropTypes.func
    },

    getInitialState: function() {
      return {
        value: this.props.value || ''
      };
    },

    render: function() {
      if(this.props.pattern){
        this.props.regExp = new RegExp(this.props.pattern);
      }

      this.props.type = this.props.type || 'text';

      return (
          <input
            className="form-control"
            autoComplete="off"
            {...this.props}
            value={this.state.value}
            onBlur={this._onBlur}
            onChange={this._onChange}
          />
      );
    },

    /*
     * 失去焦点
     */
    _onBlur: function() {
      this.validate();
    },

    /*
     * change 自动验证
     */
    _onChange: function(e) {
      var value = e.target.value;

      this.validate();
      this.setState({
        value: value
      });
      this.props.onChange && this.props.onChange(e);
    },

    validate: function(){
      var elem = this.getDOMNode();
      var value = elem.value;
      var regExp = this.props.regExp;

      // 如果不匹配正则，设置为错误
      if(regExp && !value.match(regExp)){
        this.setState({isError: true});
      }else{
        this.setState({isError: false});
      }
    }
  });

  return TextInput;
});