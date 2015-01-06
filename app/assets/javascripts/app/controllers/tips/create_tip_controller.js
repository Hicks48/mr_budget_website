MrBudgetApp.controller('CreateTipController', ['$scope', 'Tip',
  function($scope, Tip){
    $scope.tip = {};

    $scope.add_tip = function(){
      console.log('clicked')
      Tip.create($scope.tip).
        success(function(){
          console.log('jees!')
        });
    }
  }]);
