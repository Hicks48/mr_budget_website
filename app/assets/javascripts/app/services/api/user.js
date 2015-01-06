MrBudgetApp.service('User', ['$http',
  function($http){
    return {
      login: function(user){
        return $http.post('/login', user);
      }
    }
  }]);
