/**
 * Created by anupam.deb on 12/10/2014.
 */
define(['app'], function (app) {
    app.controller('RootCtrl', ['$scope', function ($scope, $rootScope) {

        $scope.message = 'Welcome to unit test';

        /*$scope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                console.log('$stateChangeStart');
            });
    
        $scope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                console.log('$stateChangeSuccess');
            });
    
        $scope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {
                console.log(event);
                console.log(toState);
                console.log(toParams);
                console.log(fromState);
            });
    
        $scope.$on('$viewContentLoading',
            function (event, viewConfig) {
    
            });
    
        $scope.$on('$viewContentLoaded',
            function (event) {
    
            });*/

    }]);
});
