'use strict';

var angApplication = angular.module('angularApp', []);

angApplication.service('Service', ['Value', function (a) {
    this.local = 'St',
        this.sayHi = function () {
            console.log('hii from Service ' + a.first + ' ' + a.last);
        },
        this.sayHello = function () {
            return 'Hello service from' + this.local;
        }

}]);


angApplication.config(function ($provide) {
    $provide.decorator('Service', function ($delegate) {

        $delegate.local = ' Decorator';

        $delegate.newFunc = function () {
            console.log('hiiii');
        }

        return $delegate;
    });
});

angApplication.run(function () {
});


angApplication.factory('DoubleFilter', function () {
    return function (input, input2) {
        return input * 2 + parseInt(input2);
    }
});

angApplication.value('Value', {
    first: 'lukas ', last: 'weber'
});

angApplication.constant('Constant', {
    first: 'julian', last: 'weber'
});


angApplication.factory('Factory', function (Value) {

    var prop = undefined;

    return {
        sayHi: function () {
            console.log('hii from Factory ' + Value.first + ' ' + Value.last);
        },
        setProp: function (val) {
            prop = val;
        },
        getProp: function () {
            return prop;
        }
    }

});


angApplication.controller('ParentController', ['Service', 'Factory', 'Value',
    'DoubleFilter', '$scope', function (Service, Factory, Value, DoubleFilter, $scope) {
        $scope.op = {a: undefined};
        Factory.sayHi();
        Factory.setProp('abc');
        console.log(Service.sayHello());
        Service.newFunc();

    }]);


angApplication.controller('ChieldController', ['Service', 'Factory', 'Value',
    'DoubleFilter', '$scope', function (Service, Factory, Value, DoubleFilter, $scope) {


    }]);



