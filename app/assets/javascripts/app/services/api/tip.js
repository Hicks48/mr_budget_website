MrBudgetApp.service('Tip', ['$http',
  function($http){
    return {
      weekly_top: function(amount){
        return $http.get('/tips_of_the_week');
      },
      daily_top: function(amount){
        return $http.get('/tips_of_the_day');
      },
      latest: function(amount){
        return $http.get('/latest/' + amount);
      },
      create: function(tip){
        return $http.post('/tips', tip);
      }
    }
  }]);
