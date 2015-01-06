MrBudgetApp.service('User', ['$http',
  function($http){
    return {
      login: function(user){
        return $http.post('/login', user);
      },
      register: function(user){
        return $http.post('/users', user);
      },
      current: function(){
        return $http.get('/users/current_user_info').
          success(function(data){
            return data;
          })
      }
    }
  }]);
