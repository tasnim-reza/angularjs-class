angular.module('app').service('classRegistration',function($http, policies) {
    return {
        register: function(newClass, student) {
            if(policies.canRegisterStudent(newClass, student)) {
                // implementation
            }
        }
    }
});