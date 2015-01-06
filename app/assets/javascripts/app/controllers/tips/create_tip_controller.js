MrBudgetApp.controller('CreateTipController', ['$scope', 'Tip', '$location',
  function($scope, Tip, $location){
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
