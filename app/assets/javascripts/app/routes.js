MrBudgetApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/', {
      controller: 'HomeController',
      templateUrl: '../app/assets/javascripts/app/views/home.html'
    }).
    when('/tip/new', {
      controller: 'CreateTipController',
      templateUrl: '../app/assets/javascripts/app/views/tips/new.html',
      resolve: {
        current_user: function(User){
          return User.current();
        }
      }
    }).
    when('/tip', {
      controller: 'TipsListController',
      templateUrl: '../app/assets/javascripts/app/views/tips/all.html'
    }).
    when('/log-in', {
      controller: 'LoginController',
      templateUrl: '../app/assets/javascripts/app/views/users/login.html'
    }).
    when('/register', {
      controller: 'RegisterController',
      templateUrl: '../app/assets/javascripts/app/views/users/register.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);
