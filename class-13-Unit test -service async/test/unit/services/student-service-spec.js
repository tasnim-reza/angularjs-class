define([
        'angularMock',
        //'app',
        'service/student-service'
],
    function () {
        describe('Student service', function () {
            //variable declaration
            var service,
                httpBackend,
                rootScope,
                broadCastMessage = { msg: "welcome to broadcast" };

            //module initialization
            beforeEach(function () {
                module('angularApp');
            });

            //controller initialization
            beforeEach(function () {
                inject(function (studentService, $httpBackend, $rootScope) {
                    service = studentService;

                    httpBackend = $httpBackend;
                    rootScope = $rootScope;
                    //spyOn(scope, '$broadcast').andCallThrough();;
                });
            });

            afterEach(function () {
                httpBackend.verifyNoOutstandingExpectation();
                httpBackend.verifyNoOutstandingRequest();
            });

            //first scenerio
            it('should have a message', function () {
                expect(service.getMessage()).toBe('service');
            });

            //promise
            it('simple promise test', function () {

                service.getAllStudents().then(function (response) {
                    expect(response[0].Name).toEqual('Reza');
                });

                //rootScope.$digest();
                rootScope.$apply();
            });

            //http request
            it('httpBackend test', function () {
                httpBackend.whenGET('/students')
                   .respond([{Name:'Reza', Id: 1}]);

                service.getAllStudents$resouce().then(function (response) {
                    //debugger;
                    expect(response[0].Name).toEqual('Reza');
                });

                rootScope.$digest();
                httpBackend.flush();

            });

            
        });
    });
