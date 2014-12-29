/**
 * Created by anupam.deb on 12/21/2014.
 */

define(['app'], function (app) {
    app.reg.factory('Service1', [function () {

        return {
            sayHii: function () {
                return "Hii there";
            },
            calculate: function (a, b) {
                return a + b;
            }
        }

    }]);
});