'use strict';

/* Define the Angular app */

define([
    'angular',
    'app/controllers/controllers',
    'app/directives/directives',
    'app/filters/filters',
    'app/services/services'
], function (angular) {

    angular.module('temperatureio', [
            'temperatureio.filters',
            'temperatureio.services',
            'temperatureio.directives',
            'temperatureio.controllers'
        ]).config(['$routeProvider', function($routeProvider) {
            $routeProvider.when(
                '/view1', {
                    templateUrl: 'app/partials/partial1.html',
                    controller: 'MyCtrl1'
                });
            $routeProvider.when(
                '/view2', {
                    templateUrl: 'app/partials/partial2.html',
                    controller: 'MyCtrl2'
                });
            $routeProvider.otherwise({ redirectTo: '/view1' });
        }]);

    return angular.module('temperatureio', []);

});
