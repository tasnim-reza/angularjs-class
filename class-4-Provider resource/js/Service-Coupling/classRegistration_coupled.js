angular.module('app').service('classRegistration',function($http, policies) {
    return {
        register: function(newClass, student) {
            if(policies.isStudentInGoodStanding(student) && policies.classIsAvailable(newClass) && policies.studentMeetsPrereqs(newClass)) {
                // implementation
            }
        }
    }
});