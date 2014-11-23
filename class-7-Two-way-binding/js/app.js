var angApplication = angular.module('angularApp', []);


angApplication.config(function () {
});


angApplication.run(function ($rootScope) {
    $rootScope.name = 'Hii';
});


angApplication.controller('MainCtrl', ['$scope', function ($scope) {

    $scope.x =0;
    $scope.clicktest = function () {
        //$scope.$evalAsync(print);
        //console.log('2');
    };
       var i = 0;

    function print(){
        console.log('1');
    }
}]);




angApplication.directive('contenteditable', ['$sce', function($sce) {
        return {
            restrict: 'A', // only activate on element attribute
            require: '?ngModel', // get a hold of NgModelController
            link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return; // do nothing if no ng-model

                // Specify how UI should be updated
                ngModel.$render = function() {
                    element.html(ngModel.$viewValue || '')  ;
                    //element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
                };

                // Listen for change events to enable binding
                element.on('blur keyup change', function() {
                    //scope.$evalAsync(read);
                    read();
                });
                read(); // initialize

                // Write data to the model
                function read() {
                    var html = element.html();
                    // When we clear the content editable the browser leaves a <br> behind
                    // If strip-br attribute is provided then we strip this out
                    if ( attrs.stripBr && html == '<br>' ) {
                        html = '';
                    }
                    ngModel.$setViewValue(html);
                }
            }
        };
    }]);

angApplication.directive('strcharlessthanfive', ['$sce', function($sce) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, elm, attr, ctrl) {
            if (!ctrl) return;


            ctrl.$validators.strcharlessthanfive = function(value) {
                 if(value && value.length>4) return false;
                 return true;
            };

            //attr.$observe('required', function() {
            //    ctrl.$validate();
            //});
        }
    };
}]);




