/*var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function (path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});*/

var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/-spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

    paths: {
        service: 'js/services',
        controller: 'js/controllers',
        directive: 'js/directives',
        utility: 'js/utility',
        
        angular: 'lib/angular/angular',
        angularUiRouter: 'lib/angular/angular-ui-router',

        angularMock: 'lib/mock-lib/angular-mocks/angular-mocks',
        stateMock: 'lib/mock-lib/ui-router-mock/state-mock',

        app: 'js/app',
        RootController: 'js/controllers/RootController',
        ItemDetailCtrl: 'js/controllers/ItemDetailCtrl',
        State1ListCtrl: 'js/controllers/State1ListCtrl',
        State2ListCtrl: 'js/controllers/State2ListCtrl',
        service1: 'js/services/Service1',
        service2: 'js/services/Service2'
    },

    shim: {
        //'angular': { deps: ['jquery'], exports: 'angular' },
        'angularResource': ['angular'],
        'angularRoute': ['angular'],

        'angularMock': { deps: ['angular'] },
        'stateMock': { deps: ['angular'] },

        'angularUiRouter': { deps: ['angular'], exports: 'angularUiRouter' },
    },
    priority: [
		"angular"
    ],
    // dynamically load all test files
    deps: tests,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
