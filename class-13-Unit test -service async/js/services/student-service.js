define(['app'], function (app) {
    app.service('studentService', ['$resource', '$q', '$timeout', function ($resource, $q, $timeout) {
        var studentResource = $resource('/students/');

        this.getMessage = function () {
            return 'service';
        };

        this.getAllStudents = function () {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve([
                    { Name: 'Reza', Roll: 1 },
                    { Name: 'Hamim', Roll: 2 },
                    { Name: 'Polin', Roll: 3 }
                ]);
            }, 0);

            return deferred.promise;
        };

        this.getAllStudents$resouce = function () {
            var deferred = $q.defer();

            $resource('/students').query(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };
    }]);
});