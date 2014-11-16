angular.module('app').factory('classRegistration', function (policies) {
    return{
        register: function(newClass, student){
            if(policies.canRegisterStudent(newClass, student)){
                 //implementation
            }
        }
    }
});