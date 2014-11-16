angular.module('app').controller('scheduleCtrl',function($scope) {
  $scope.schedule = {
    classes: []
  };

  $scope.register = function(newClass) {
    $scope.schedule.classes.push({class: newClass})
  }
});