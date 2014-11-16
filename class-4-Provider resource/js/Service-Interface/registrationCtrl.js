angular.module('app').controller('registrationCtrl', function ($scope, classRegistration, currentUser) {

    $scope.register = function (newClass) {
        classRegistration.addClassToSchedule(currentUser, newClass);
        classRegistration.addStudentToClass(newClass, currentUser);
    };
});