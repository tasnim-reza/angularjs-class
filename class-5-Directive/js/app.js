var angApplication = angular.module('angularApp', []);

angApplication.config(function () {
});

angApplication.run(function ($rootScope) {
    $rootScope.name = 'Hii';
});

angApplication.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.doSomeThing = function () {
        console.log('Button clicked');
    };

    $scope.records = [{name: 'A', id: 1}, {name: 'B', id: 2}, {name: 'C', id: 3}];

    $scope.rooTperson = {name: 'Lukas', result: 'A+'};

    $scope.studentType = 'good student';

}]);

//angApplication.directive('myCustomDirective', function () {
//    return {
//        template: '{{person.name}} got {{person.result}} in his HSC exam'
//    }
//});

//angApplication.directive('myCustomDirective', function () {
//    return {
//        templateUrl: 'my-custom.html'
//    }
//});

//E - Element name (default): <my-directive></my-directive>
//A - Attribute (default): <div my-directive="exp"></div>
//C - Class: <div class="my-directive: exp;"></div>
//M - Comment: <!-- directive: my-directive exp -->

//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        templateUrl: 'my-custom.html'
//    }
//});

//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        templateUrl: 'my-custom.html' ,
//        link: function($scope, $element, attr){
//            console.log($scope);
//    }
//    }
//});


//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        scope:true,
//        templateUrl: 'my-custom.html',
//        link: function ($scope, $element, attr) {
//            console.log($scope);
//
//        }
//    }
//});
//
//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        scope:{
//            person:'=personData'
//        },
//        templateUrl: 'my-custom.html',
//        link: function ($scope, $element, attr) {
//
//            console.log($scope)
//        }
//    }
//});


//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        scope:{
//            person:'=personData',
//            isolatedName:'@isn'
//        },
//        templateUrl: 'my-custom.html',
//        link: function ($scope, $element, attr) {
//
//            console.log($scope)
//        }
//    }
//});

//angApplication.directive('myCustomDirective', function () {
//    return {
//        restrict: 'E',
//        transclude: true,
//        scope:{
//            person:'=personData',
//            isolatedName:'@isn'
//        },
//        templateUrl: 'my-custom.html',
//        link: function ($scope, $element, attr) {
//            console.log($scope)
//        }
//    }
//});

//priority
//terminal

angApplication.directive('myCustomDirective', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope:{
            person:'=personData',
            isolatedName:'@isn'
        },
        controller:['$scope', function ($scope) {

        }],
        templateUrl: 'my-custom.html',
        link: function ($scope, $element, attr) {
          //  console.log($scope)
        }
    }
});




