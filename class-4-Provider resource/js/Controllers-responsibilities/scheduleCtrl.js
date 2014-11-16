angular.module('app').controller('scheduleCtrl',function($scope, schedule) {
  $scope.schedule = schedule;

  $scope.register = function(newClass) {
    $scope.schedule.register(newClass);
  }
});