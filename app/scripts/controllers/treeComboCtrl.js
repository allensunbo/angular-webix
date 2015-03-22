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
        $scope.selected = 'Banana';
    });
