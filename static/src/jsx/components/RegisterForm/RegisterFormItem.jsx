define([
  'react',
  'components/libs/TextInput/TextInput'
], function(
   React,
   TextInput
) {

  var RegisterFormItem = React.createClass({

    getInitialState: function() {
      return {
        value: this.props.value || ''
      };
    },

    render: function() {
      var {className, ...props} = this.props;
      var className = this.state.isError ? 'form-item has-error' : 'form-item';
      return (
        <div className={className}>
          <TextInput
            {...props}
            ref="TextInput"
            className="form-control"
            required={true}
            value={this.state.value}
            onChange={this._onChange}
          />
        </div>
      );
    },

    _onChange: function(){
      var isError = this.refs.TextInput.state.isError;
      this.setState({
        isError
      });
    }
  });

  return RegisterFormItem;
});