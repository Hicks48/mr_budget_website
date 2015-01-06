MrBudgetApp.controller('RegisterController', ['$scope', 'User', '$location',
  function($scope, User, $location){
    $scope.user = {};

    $scope.register = function(){
      console.log($scope.user)
      User.register($scope.user).
        success(function(res){
          $location.path('/');
        });
    }
  }]);
