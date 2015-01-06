MrBudgetApp.controller('TipsOfTheDayController', ['$scope', 'Tip',
  function($scope, Tip){
    Tip.daily_top().
      success(function(tip){
        $scope.tip = tip;
      });
  }]);
