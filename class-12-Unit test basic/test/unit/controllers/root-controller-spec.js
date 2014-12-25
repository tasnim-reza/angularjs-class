define([
        'angularMock',
        //'app',
        'RootController'
],
    function () {
        describe('RootCtrl', function () {
            //variable declaration
            var containerController,
                scope;

            //module initialization
            beforeEach(function () {
                module('angularApp');
            });

            //controller initialization
            beforeEach(function () {
                inject(function ($controller, $rootScope) {
                    scope = $rootScope.$new();
                    containerController = $controller('RootCtrl', { $scope: scope });
                });
            });

            //first scenerio
            it('should have a message', function () {
                expect(scope.message).toBe('Welcome to unit test');
            });
        });
    });
