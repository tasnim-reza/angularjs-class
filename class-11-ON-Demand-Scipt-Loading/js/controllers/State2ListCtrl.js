/**
 * Created by Anup_sust on 12/8/2014.
 */
define(['app'], function (app) {
    app.reg.controller('State2ListCtrl', ['$scope','Service2', function ($scope, Service2) {
    $scope.things = ["A", "Set", "Of", "Things"];

        console.log(Service2.calculate(3,4));
}]);

});
