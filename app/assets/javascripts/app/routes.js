MrBudgetApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/', {
      controller: 'HomeController',
      templateUrl: '../app/assets/javascripts/app/views/home.html'
    }).
    when('/tip/new', {
      controller: 'CreateTipController',
      templateUrl: '../app/assets/javascripts/app/views/tips/new.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
