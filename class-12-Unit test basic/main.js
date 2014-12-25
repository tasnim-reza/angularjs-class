require.config({
    paths:{
        angular: 'lib/angular/angular',
        angularUiRouter: 'lib/angular/angular-ui-router',
        app: 'js/app',
        RootController: 'js/controllers/RootController',
        ItemDetailCtrl: 'js/controllers/ItemDetailCtrl',
        State1ListCtrl: 'js/controllers/State1ListCtrl',
        State2ListCtrl: 'js/controllers/State2ListCtrl',
        service1:'js/services/Service1',
        service2:'js/services/Service2'
    },
    shim:{
       'angularUiRouter':['angular']
    },
    urlArgs: 'v=1.9'
});



require([
        'angular',
        'angularUiRouter',
        'app',
        'RootController',
        'ItemDetailCtrl'
        //'State1ListCtrl',
        //'State2ListCtrl'
    ],
    function () {
        angular.bootstrap(document.documentElement, ['angularApp']);
    });
