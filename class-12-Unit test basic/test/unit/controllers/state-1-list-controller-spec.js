define([
        'angularMock',
        //'app'
],
    function () {
        fdescribe('State1ListCtrl', function () {
            //variable declaration
            var containerController,
                scope;

            //module initialization
            beforeEach(function () {
                module('angularApp');
            });

            //controller initialization
            beforeEach(function (done) {
                inject(function ($controller, $rootScope) {
                    require(['controller/State1ListCtrl'], function () {
                        scope = $rootScope.$new();
                        containerController = $controller('State1ListCtrl', { $scope: scope });
                        done();
                    });
                });
            });

            //first scenerio
            it('should have a item', function (done) {
                expect(scope.items[0].id).toBe(1);
                done();
            });
        });
    });
