MrBudgetApp.service('Tip', ['$http',
  function($http){
    return {
      weekly_top: function(amount){
        return $http.get('/tips/tips_of_the_week/' + amount);
      },
      daily_top: function(amount){
        return $http.get('/tips/tips_of_the_day/' + amount);
      },
      latest: function(amount){
        return $http.get('/tips/latest_tips/' + amount);
      },
      create: function(tip){
        return $http.post('/tips', tip);
      }
    }
  }]);
