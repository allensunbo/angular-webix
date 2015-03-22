'use strict';

/**
 * @ngdoc function
 * @name angularWebixApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWebixApp
 */
angular.module('angularWebixApp')
    .controller('TreeComboCtrl', function($scope) {
        $scope.title = 'Please select an item below:';
        console.log('TreeComboCtrl');
        $scope.selected = 'Book 1';
        $scope.selected2 = 'Book 2';
    });
