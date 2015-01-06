MrBudgetApp.controller('LoginController', ['$scope', 'User', '$location',
  function($scope, User, $location){
    $scope.user = {};

    $scope.login = function(){
      User.login($scope.user).
        success(function(res){
          if(res.error){
            $scope.alert = {
              type: 'danger',
              content: 'Wrong username or password!'
            }
          }else{
            $location.path('/');
          }
        });
    }
  }]);
