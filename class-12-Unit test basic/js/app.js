define(['angular', 'angularUiRouter'], function () {
    var angularApp = angular.module('angularApp', ['ui.router']);

    angularApp.reg = {controller: {} };

    angularApp.config(function ($stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $urlRouterProvider) {

        angularApp.reg =
        {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };
        //
        // For any unmatched url, redirect to /state1
        //   $urlRouterProvider.otherwise("/state1");
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
                resolve: {
                    resolveDependency: ['$q', '$rootScope', function ($q, $rootScope) {
                        var defer = $q.defer();
                            require(['State1ListCtrl','service1'], function () {
                                defer.resolve();
                                //$rootScope.apply();
                            });
                        return defer.promise;
                    }]
                },
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
                resolve: {
                    randomValue: ['$q', '$timeout', function ($q, $timeout) {
                        var defer = $q.defer(), timeoutLimit = Math.random() * 6000;
                        $timeout(function () {
                            defer.resolve(timeoutLimit);
                        }, timeoutLimit);
                        return defer.promise;
                    }]
                },
                data: {
                    customData1: 44,
                    customData2: "red"
                },
                onEnter: function (randomValue) {
                   // console.log('State activated');
                },
                onExit: function (randomValue) {
                  //  console.log('State deactivated');
                }
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "views/state2.html"
            })
            .state('state2.list', {
                url: "/list",
                templateUrl: "views/state2.list.html",
                resolve: {
                    resolveDependency: ['$q', '$rootScope', function ($q, $rootScope) {
                        var defer = $q.defer();
                        require(['State2ListCtrl','service2'], function () {
                            defer.resolve();
                            //$rootScope.apply();
                        });
                        return defer.promise;
                    }]
                },
                controller: 'State2ListCtrl'
            });
    });

    angularApp.run(function ($rootScope) {

    });

    return angularApp;

});












