var angApplication = angular.module('angularApp', []);


angApplication.config(function () {
});


angApplication.run(function ($rootScope) {

});


angApplication.controller('ParentCtrl', ['$scope', function ($scope) {
    //$scope.$on('myCustomEvent', function (event, data) {
    //    console.log(data.someProp + ' from ParentCtrl'); // 'Data to send'
    //});



  //  console.log($scope.$$listeners) ;

}]);



angApplication.controller('ChieldCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

//    setTimeout(function () {
//        //$scope.$emit('myCustomEvent', {
//        //    someProp: 'Sending you an Object using $emit!' // send whatever you want
//        //});
//
////firing an event downwards
//        $scope.$broadcast('myCustomEvent', {
//            someProp: 'Sending you an Object using $broadcast!' // send whatever you want
//        });
//        //$rootScope.$broadcast('myCustomEvent', {
//        //    someProp: 'Sending you an Object using $broadcast!' // send whatever you want
//        //});
//
//    },100);


}]);

angApplication.controller('SiblingCtrl', ['$scope', function ($scope) {

    //$scope.$on('myCustomEvent', function (event, data) {
    //    console.log(data.someProp+' from SiblingCtrl'); // 'Data to send'
    //});

}]);


angApplication.controller('ChieldLevel2Ctrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
   // var xy = $scope.$on('myCustomEvent', function (event, data) {
   //     console.log(data.someProp + ' from ChieldLevel2Ctrl'); // 'Data to send'
   //       //event.stopPropagation();
   // });
   //
   //xy();
    //setTimeout(function () {
    //    $scope.$emit('myCustomEvent', {
    //        someProp: 'Sending you an Object using $emit!' // send whatever you want
    //    });
    //
    //
    //}, 100);
}]);



angApplication.controller('PromiseDemoCtrl', ['$scope', '$q', '$timeout', function ($scope, $q, $timeout) {

    //function asyncGreet(name) {
    //    //perform some asynchronous operation, resolve or reject the promise when appropriate.
    //    return $q(function(resolve, reject) {
    //        setTimeout(function() {
    //            if (name=='Robin Hood') {
    //                resolve('Hello, ' + name + '!');
    //            } else {
    //                reject('Greeting ' + name + ' is not allowed.');
    //            }
    //        }, 1000);
    //    });
    //}
    //
    //var promise = asyncGreet('Robin Hoffod');
    //promise.then(function(greeting) {
    //    alert('Success: ' + greeting);
    //}, function(reason) {
    //    alert('Failed: ' + reason);
    //});


    //----------------------------------------------------------

    //function asyncGreet(name) {
    //    var deferred = $q.defer();
    //
    //    setTimeout(function() {
    //        deferred.notify('About to greet ' + name + '.');
    //        deferred.notify('Second About to greet ' + name + '.');
    //
    //        if (name=='Robin Hood') {
    //            deferred.resolve('Hello, ' + name + '!');
    //        } else {
    //            deferred.reject('Greeting ' + name + ' is not allowed.');
    //        }
    //    }, 1000);
    //
    //    return deferred.promise;
    //}
    //
    //var promise = asyncGreet('Robin Hood');
    //promise.then(function(greeting) {
    //    alert('Success: ' + greeting);
    //}, function(reason) {
    //    alert('Failed: ' + reason);
    //}, function(update) {
    //    alert('Got notification: ' + update);
    //});


    //-----------------------------------------------------------.


    var taskOne = function () {
            var defer = $q.defer();
            $timeout(function () {
                defer.resolve(1);
            }, Math.random() * 1000);

            return defer.promise;
        },
        taskTwo = function (val) {
            var defer = $q.defer();
            $timeout(function () {
                console.log("resolved-" + val);
                defer.resolve(val+1);
            }, Math.random() * 1000);

            return defer.promise;
        },
        taskThree = function (val) {
            var defer = $q.defer();
            $timeout(function () {
                console.log("resolved-" + val);
                defer.resolve(val+1);
            }, Math.random() * 1000);

            return defer.promise;
        },
        taskFour = function (val) {
            var defer = $q.defer();
            $timeout(function () {
                console.log("resolved-" + val);
                defer.resolve(val+1);
            }, Math.random() * 1000);

            return defer.promise;
        },
        taskFive = function (val) {
            var defer = $q.defer();
            $timeout(function () {
                console.log("resolved-" + val);
                defer.resolve(val+1);
            }, Math.random() * 1000);

            return defer.promise;
        }

    //taskOne(0);taskTwo(1);taskThree(2);taskFour(3);taskFive(4);

    //taskOne().then(taskTwo)
    //    .then(taskThree)
    //    .then(taskFour)
    //    .then(taskFive);

    //taskOne().then(taskTwo)
    //    .then(function (val) {
    //        return taskThree(val).then(function () {
    //            var defer = $q.defer();
    //            $timeout(function () {
    //                defer.resolve(10);
    //            }, 1000);
    //
    //            return defer.promise;
    //        });
    //    })
    //    .then(taskFour)
    //    .then(taskFive);

    var all = $q.all([taskOne(2), taskTwo(4), taskThree(6), taskFour(8), taskFive(9)]);
    all.then(function (data) {
        console.log("all promise are resolved "+data);
    });

}]);





