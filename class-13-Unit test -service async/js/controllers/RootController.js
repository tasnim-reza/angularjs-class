/**
 * Created by anupam.deb on 12/10/2014.
 */
define(['app', 'service/student-service'], function (app) {
    app.controller('RootCtrl', ['$scope', 'studentService', function ($scope, studentService) {

        $scope.message = 'Welcome to unit test';

        $scope.getAllStudents = function () {
            studentService.getAllStudents().then(function (data) {
                $scope.students = data;
            });
        };

        $scope.getAllStudents$resouce = function () {
            studentService.getAllStudents$resouce().then(function (data) {
                $scope.students = data;
            });
        };

        $scope.broadcastMessage = function () {
            $scope.$broadcast('onSendMessage'); //, { msg: "welcome to broadcast" });
        };

        $scope.broadcastMessageTwo = function () {
            $scope.$broadcast('onSendMessage', "welcome to broadcast");
        };

        $scope.$on('onEmitMessage', function(evt, arg1) {
            $scope.emittedMsg = arg1;
        });
    }]);
});
