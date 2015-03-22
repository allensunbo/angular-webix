'use strict';

/**
 * @ngdoc overview
 * @name angularWebixApp
 * @description
 * # angularWebixApp
 *
 * Main module of the application.
 */
angular
    .module('angularWebixApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'webix'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/flat', {
                templateUrl: 'views/flatTable.html',
                controller: 'FlatTableCtrl'
            })
            .when('/tree', {
                templateUrl: 'views/treeTable.html',
                controller: 'TreeTableCtrl'
            })
            .when('/treeCombo', {
                templateUrl: 'views/treeCombo.html',
                controller: 'TreeComboCtrl'
            })
            .otherwise({
                redirectTo: '/flat'
            });
    });
