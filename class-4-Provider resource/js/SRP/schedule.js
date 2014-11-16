angular.module('app').service('schedule',function($http) {
    function getClassList() { /* implementation */ }
    function getPolicies() { /* implementation */ }
    function getInstructors() { /* implementation */ }
    var classList = getClassList();
    var policies = getPolicies();
    var instructors = getInstructors();
    return {
        getSchedule: function(userId) {
            // code
        },
        getClassList: function() {
            // code
        },
        register: function(newClassId, userId) {
            // code
        },
        addAvailableClass: function(newClass) {
            // code
        },
        isClassFull: function(classId) {
            // code
        },
        getInstructorSchedule: function(instructorId) {
            // code
        },
        getClassesByMajor: function(majorId) {
            // code
        },
        isStudentScheduleFull: function(studentId) {

        }
    }
});