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
        //transclude: true,
        scope:{
            person:'=personData',
            isolatedName:'@isn'
        },
        controller:['$scope', function ($scope) {
            console.log('myCustomDirective' + ': controller');
        }],
        //template: '{{person.name}} got {{person.result}} in his HSC exam'+'<levelxyz></levelxyz>',
        templateUrl: 'my-custom.html',
        compile: function(tElem, tAttrs){
            console.log('myCustomDirective' + ': compile');
            return {
                pre: function(scope, iElem, iAttrs){
                    console.log('myCustomDirective' + ': pre link');
                },
                post: function(scope, iElem, iAttrs){
                    console.log('myCustomDirective' + ': post link');
                }
            }
        }
    }
});

function createDirective(name){
    return function(){
        return {
            restrict: 'E',
            controller:['$scope', function ($scope) {
                console.log(name + ': controller');
            }],
            compile: function(tElem, tAttrs){
                console.log(name + ': compile');
                return {
                    pre: function(scope, iElem, iAttrs){
                        console.log(name + ': pre link');
                    },
                    post: function(scope, iElem, iAttrs){
                        console.log(name + ': post link');
                    }
                }
            }
        }
    }
}

angApplication.directive('levelA', createDirective('levelA'));
angApplication.directive('levelB', createDirective('levelB'));
angApplication.directive('levelC', createDirective('levelC'));
angApplication.directive('levelD', createDirective('levelD'));
angApplication.directive('levelE', createDirective('levelE'));
angApplication.directive('levelF', createDirective('levelF'));
angApplication.directive('levelxyz', createDirective('levelxyz'));


angApplication.directive('exampleDirective', function() {
    return {
        restrict: 'AE',
        //template: '<child-directive></child-directive>',
        controller: function($scope, $element){
            this.awesomeVariable = "Awesome Content lives here!"
        }
    }
});

angApplication.directive('childDirective', function() {
    return {
        restrict:  'AE',
        template: '<h1>bar</h1>',
        require: '^exampleDirective',
        link: function($scope, $element, attr, exampleDirectiveCtrl){
            // some awesome jquery pluggin which replaces things and bits
            $element.replaceWith(angular.element('<h3>' +  exampleDirectiveCtrl.awesomeVariable + '</h3>'));
        }
    }
});






