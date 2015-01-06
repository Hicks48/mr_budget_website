MrBudgetApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/', {

    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
