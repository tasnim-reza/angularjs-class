/**
 * Created by anupam.deb on 12/10/2014.
 */

angApplication.controller('RootCtrl', ['$scope', function ($scope, $rootScope) {

    $scope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            console.log('$stateChangeStart');
        });

    $scope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
            console.log('$stateChangeSuccess');
        });

    $scope.$on('$stateChangeError',
        function (event, toState, toParams, fromState, fromParams, error) {
            console.log('$stateChangeError');
        });

    $scope.$on('$viewContentLoading',
        function (event, viewConfig) {

        });

    $scope.$on('$viewContentLoaded',
        function (event) {

        });

}]);
