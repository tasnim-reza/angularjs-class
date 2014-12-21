/**
 * Created by Anup_sust on 12/8/2014.
 */
define(['app'], function (app) {
    app.reg.controller('State1ListCtrl', ['$scope', 'Service1', function ($scope, Service1) {
    //$scope.items = ["A", "List", "Of", "Items"];

    $scope.items = [
        {id: 1, name: 'AB'},
        {id: 2, name: 'ABC'},
        {id: 3, name: 'ABCD'},
        {id: 4, name: 'ABCDE'},
        {id: 5, name: 'ABCDEF'},
        {id: 6, name: 'ABCDEFG'}

    ];

        console.log(Service1.calculate(1,2));



}]);
});