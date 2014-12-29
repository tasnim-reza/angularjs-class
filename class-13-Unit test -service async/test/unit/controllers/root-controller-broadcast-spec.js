define([
        'angularMock',
        //'app',
        'RootController'
],
    function () {
        fdescribe('RootCtrl', function () {
            //variable declaration
            var rootController,
                scope,
                rootScope,
                broadCastMessage = { msg: "welcome to broadcast" };

            //module initialization
            beforeEach(function () {
                module('angularApp');
            });

            //controller initialization
            beforeEach(function () {
                inject(function ($controller, $rootScope) {
                    scope = $rootScope.$new();
                    rootScope = $rootScope;
                    rootController = $controller('RootCtrl', { $scope: scope });
                });
            });

            //first scenerio
            it('should have a message', function () {
                expect(scope.message).toBe('Welcome to unit test');
            });

            //broadcast
            fit('should have a message', function () {
                spyOn(scope, '$broadcast').and.callThrough();
                
                //scope.$apply();
                scope.broadcastMessage();

                expect(scope.$broadcast).toHaveBeenCalled();
                
            });

            it('should have a message', function () {
                spyOn(scope, '$broadcast').and.callThrough();

                //scope.$apply();
                scope.broadcastMessage();

                expect(scope.$broadcast).toHaveBeenCalledWith('onSendMessage');

            });

            it('should have a message', function () {
                spyOn(scope, '$broadcast').and.callThrough();

                //scope.$apply();
                scope.broadcastMessage();

                expect(scope.$broadcast).toHaveBeenCalledWith('onSendMessage', 'welcome to broadcast');

            });
        });
    });
