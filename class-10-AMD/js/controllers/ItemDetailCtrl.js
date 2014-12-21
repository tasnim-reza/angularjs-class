/**
 * Created by anupam.deb on 12/10/2014.
 */

define(['app'], function (app) {
    app.controller('ItemDetailCtrl', ['$scope','$stateParams','randomValue', '$state', function ($scope, $stateParams, randomValue, $state) {

    console.log(randomValue);
    console.log($state.current.data.customData1)

    angular.forEach($scope.items, function (each) {
        if(each.id==$stateParams.id)$scope.selectedItem = each;
    });

}]);
});