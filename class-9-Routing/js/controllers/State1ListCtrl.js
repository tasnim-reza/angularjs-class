/**
 * Created by Anup_sust on 12/8/2014.
 */
angApplication.controller('State1ListCtrl', ['$scope', function ($scope) {
    //$scope.items = ["A", "List", "Of", "Items"];

    $scope.items = [
        {id: 1, name: 'AB'},
        {id: 2, name: 'ABC'},
        {id: 3, name: 'ABCD'},
        {id: 4, name: 'ABCDE'},
        {id: 5, name: 'ABCDEF'},
        {id: 6, name: 'ABCDEFG'}

    ];


}]);