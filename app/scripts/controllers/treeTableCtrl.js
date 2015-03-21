'use strict';

/**
 * @ngdoc function
 * @name angularWebixApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWebixApp
 */
angular.module('angularWebixApp')
    .controller('TreeTableCtrl', function($scope, $http, TreeTableProvider, TreeTableColumnProvider,
        TreeTableColumnProvider2, WebService) {
        var tableProvider, grid, loaded = false;
        $http.get('data/treeTable.json')
            .success(function(response) {
                var columns = angular.copy(TreeTableColumnProvider);
                var data = response.data;
                tableProvider = new TreeTableProvider("treeTable", columns, data);
                grid = tableProvider.grid;
                loaded = true;
            });

        $scope.updateData = function() {
            console.log('updateData');

            WebService.treeTableData2()
                .success(function(response) {
                    var newData = response.data;
                    loaded = true;
                    var newColumns = angular.copy(TreeTableColumnProvider2);

                    tableProvider.rebuild(newColumns, newData);
                });
        }

    });
