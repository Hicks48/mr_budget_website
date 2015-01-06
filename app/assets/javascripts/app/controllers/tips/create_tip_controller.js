MrBudgetApp.controller('CreateTipController', ['$scope', 'Tip', '$location', 'current_user',
  function($scope, Tip, $location, current_user){
    console.log(current_user.data)

    $scope.tip = {};

    $scope.add_tip = function(){
      Tip.create($scope.tip).
        success(function(){
          $location.path('/tip')
        }).
        error(function(){

        });
    }
  }]);
