var angApplication = angular.module('angularApp', ['ngResource']);

angApplication.service('Service', ['Value', function (a) {
    this.local = 'St',
        this.sayHi = function () {
            console.log('hii from Service ' + a.first + ' ' + a.last);
        },
        this.sayHello = function () {
            return 'Hello service from' + this.local;
        };
    this.newTest = 'Hello '+this.local;

}]);


angApplication.provider('Selise', function () {

    var firstName = undefined, lastName = undefined;

    this.setFirstName = function (val) {
        firstName = val;
    };

    this.setLastName = function (val) {
        lastName = val;
    };

    this.$get = function () {

        return {
            sayHii: function () {
                return "Invoked inside provider " + firstName + ' ' + lastName;
            },
            sayHii2: "Invoked inside provider " + firstName + ' ' + lastName
        }

    }

});

//function xyz() {
//    this.x = 0;
//    this.y = 0;
//}
//
//
//function xyz() {
//    return {
//        x: 0,
//        y: 0
//    };
//}

angApplication.config(function (SeliseProvider) {
    SeliseProvider.setFirstName('Lukas');
    SeliseProvider.setLastName('Weber');
});

angApplication.run(function () {
});

angApplication.value('Value', {
    first: 'lukas ', last: 'weber'
});

angApplication.controller('MainCtrl', ['Service', '$scope', '$resource', 'Selise', function (Service, $scope, $resource, Selise) {


 // console.log(Selise.sayHii2);
    console.log(Service.newTest);
    Service.local = 'jjj';
    console.log(Service.sayHello());




    var Company = $resource('/api2/v1/companies/:nid/:vary/:rel', { nid: '@nid', vary: '@vary' }, {
        update: { method: 'PUT' },
        create: { method: 'POST' },
        add: { method: 'POST' },
        store: { method: 'PUT' },
        get_transactions: { method: 'GET', url: '/rest/txn', params: { "parameters['field_comp_ref']": '@nid' }, isArray: true } ,
        dd: { method: 'GET', params: { nid: '@nid', vary: 'dd'}, isArray:true}
    });

    //{ 'get':    {method:'GET'},
    //    'save':   {method:'POST'},
    //    'query':  {method:'GET', isArray:true},
    //    'remove': {method:'DELETE'},
    //    'delete': {method:'DELETE'} };

    //var company = Company.get({}, function success(data) {
    //    //do something
    //},function failure(data) {
    //    //do something
    //});
    //
    //var User = $resource('/user/:userId', {userId:'@id'});
    //var user = User.get({userId:123}, function() {
    //    user.abc = true;
    //    user.$save();
    //});


}]);


