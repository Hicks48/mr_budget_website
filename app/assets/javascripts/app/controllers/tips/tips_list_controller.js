MrBudgetApp.controller('TipsListController', ['$scope', 'Tip',
  function($scope, Tip){
    Tip.latest(100).
      success(function(tips){
        $scope.tips = tips;
      });
  }]);
