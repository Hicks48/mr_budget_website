MrBudgetApp.controller('TipOfTheDayController', ['$scope', 'Tip',
  function($scope, Tip){
    Tip.daily_top(1).
      success(function(tips){
        $scope.tip = tips[0];
      });
  }]);
