MrBudgetApp.controller('TipsOfTheWeekController', ['$scope', 'Tip',
  function($scope, Tip){
    Tip.weekly_top(10).
      success(function(tips){
        $scope.tips = tips;
      });
  }]);
