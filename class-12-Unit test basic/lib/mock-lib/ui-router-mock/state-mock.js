angular.module('stateMock', []);
angular.module('stateMock').service("$state", function ($q) {
    this.expectedTransitions = [];

    this.current = {
        name: 'test'
    };

    this.transitionTo = function (stateName) {
        if (this.expectedTransitions.length > 0) {
            var expectedState = this.expectedTransitions.shift();
            if (expectedState !== stateName) {
                throw Error("Expected transition to state: " + expectedState + " but transitioned to " + stateName);
            }
        } else {
            throw Error("No more transitions were expected! Tried to transition to " + stateName);
        }
        console.log("Mock transition to: " + stateName);
        var deferred = $q.defer();
        var promise = deferred.promise;
        deferred.resolve();
        return promise;
    };

    this.go = this.transitionTo;

    this.expectTransitionTo = function (stateName) {
        this.expectedTransitions.push(stateName);
    };

    this.ensureAllTransitionsHappened = function () {
        if (this.expectedTransitions.length > 0) {
            throw Error("Not all transitions happened!");
        }
    };
});

angular.module('localForageMock', []);
angular.module('localForageMock').service('localForageService', function ($q) {

    var repository = {};

    this.getItem = function (key) {
        var deferred = $q.defer();

        if (repository[key])
            deferred.resolve(repository[key]);
        else
            deferred.resolve();

        return deferred.promise;
    };

    this.setItem = function (key, value) {
        var deferred = $q.defer();

        repository[key] = value;

        deferred.resolve(repository[key]);

        return deferred.promise;
    };
});

angular.module('localStorageMock', []);
angular.module('localStorageMock').service('localStorage', function ($q) {

    var localStorage = {};

    this.getItem = function (key) {
        var deferred = $q.defer();

        if (localStorage[key])
            deferred.resolve(localStorage[key]);
        else
            deferred.reject('An Error has occourd!');

        return deferred.promise;
    };

    this.setItem = function (key, value) {
        var deferred = $q.defer();

        localStorage[key] = value;

        deferred.resolve(localStorage[key]);

        return deferred.promise;
    };

    this.removeItem = function (key) {
        var deferred = $q.defer();

        localStorage[key] = null;

        deferred.resolve(localStorage[key]);

        return deferred.promise;
    };
});

angular.module('genericGridDirectiveServiceMock', []);
angular.module('genericGridDirectiveServiceMock').service('genericGridSettingService', function ($q) {
    
    this.getConfig = function () {
        var deferred = $q.defer();
        deferred.resolve(configData);
        return deferred.promise;
    };

    var configData = {
        "masterUrl": "/WorklistQueryServer/api/TaskApi",
        "masterColumns": [
            {
                "title": "RowSelection",
                "field": "RowSelection",
                "headerTemplate": "<a href='javascript:void(0)'\r\n   class='inline-block v-mid bg-dark-opacity gap-right-m5 text-center enable-flipper'\r\n   data-keycolumn='Id' data-isallselected='false' style='width:30px'>\r\n    <i class='white v-mid icon-check disabled' style='width:20px; display:inline-block; font-size: 18px;'></i>\r\n</a>\r\n<small class='count'></small>",
                "GridStyleColumnId": "RowSelection",
                "hidden": false,
                "sortable": false,
                "groupable": false,
                "width": "100px",
                "maxWidth": "100px",
                "minWidth": "100px",
                "align": 2,
                "wrappedOrOverflowed": 1,
                "isSelectable": true,
                "isReorderable": false
            }
        ],
        "masterPageSize": 15,
        "masterDefaultGroup": [],
        "masterDefaultSort": [],
        "pagerButtonCount": 7,
        "hasColumnSeparator": true,
        "isEnableContextMenu": true,
        "gridId": "GlobalWorklist",
        "selectable": false,
        "isRowSelectable": true,
        "masterMaxPageSize": 30,
        "masterMinPageSize": 5
    };
}).service('genericGridCommonService', function () {

    var self = this;

    this.getCurrentGridSetting = function () {
    };

    this.resetAllServices = function () {
    };

    this.destroy = function () {
    };

    this.initService = function (gridEl) {
        if (!gridEl) throw 'Grid defination is not found';
        self.grid = gridEl;
        self.grid.setDataSource = function() {
            console.log('mock dataSource setting function in mockGenericGridCommonService instead of kendo ui');
        };
    };
});
