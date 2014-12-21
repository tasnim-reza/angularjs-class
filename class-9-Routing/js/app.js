var angApplication = angular.module('angularApp', ['ui.router']);


angApplication.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
  //  $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "views/state1.html"
        })
        .state('state1.list', {
            url: "/list",
            templateUrl: "views/state1.list.html",
            controller: 'State1ListCtrl',
            abstract: true
        })
        .state('state1.list.default', {
            url: "",
            templateUrl: undefined,
            controller: undefined
        })
        .state('state1.list.id', {
            url: "/{id}",
            templateUrl: "views/list-detail.html",
            controller: 'ItemDetailCtrl',
            resolve:{
                randomValue:['$q', '$timeout', function ($q, $timeout) {
                    var defer = $q.defer(), timeoutLimit = Math.random()*6000;
                        $timeout(function () {
                            defer.resolve(timeoutLimit);
                        },timeoutLimit);
                    return defer.promise;
                }]
            },
            data: {
                customData1: 44,
                customData2: "red"
            },
            onEnter: function(randomValue){
                console.log('State activated');
            },
            onExit: function(randomValue){
                console.log('State deactivated');
            }
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "views/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "views/state2.list.html",
            controller: 'State2ListCtrl'
        })
        .state('state3', {
            url: "/state3",
            templateProvider: function ($q) {
                var defer = $q.defer();
                defer.resolve('<div><h2>state3 template</h2></div>');
                return defer.promise;
            }
        });
});

angApplication.run(function ($rootScope) {

});

//angApplication.controller('State1ListCtrl', ['$scope', function ($scope) {
//    $scope.items = ["A", "List", "Of", "Items"];
//}]);
//
//angApplication.controller('State2ListCtrl', ['$scope', function ($scope) {
//    $scope.things = ["A", "Set", "Of", "Things"];
//}]);











