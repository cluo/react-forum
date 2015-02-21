define([
  'dispatcher/AppDispatcher'
], function(
   AppDispatcher
) {

  var AuthAction = {
    register: function(json) {
      AppDispatcher.dispatch({
        actionType: 'USER_CREATE',
        json: json
      });
    }
  }

  return AuthAction;
});