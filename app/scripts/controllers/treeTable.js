'use strict';

/**
 * @ngdoc function
 * @name angularWebixApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWebixApp
 */
angular.module('angularWebixApp')
    .controller('TreeTableCtrl', function($scope, $http, TreeTable, TreeTableColumnProvider,
        TreeTableColumnProvider2) {
        var grid, loaded = false;
        $http.get('data/treeTable.json')
            .success(function(response) {
                var columns = angular.copy(TreeTableColumnProvider);
                var data = response.data;
                grid = TreeTable("treeTable", columns, data);
                loaded = true;
            });

        $scope.updateData = function() {
            console.log('updateData');
            grid.clearAll();

            $http.get('data/treeTable2.json')
                .success(function(response) {
                    var newColumns = angular.copy(TreeTableColumnProvider2);
                    var newData = response.data;
                    loaded = true;

                    grid.parse({
                        data: newData
                    });

                    // also remove last column first and then insert it 
                    var columns = webix.toArray(grid.config.columns);
                    columns.removeAt(2);

                    columns.insertAt({
                        id: webix.uid(),
                        header: "New column"
                    }, 2);

                    columns.insertAt({
                        id: webix.uid(),
                        header: "New column"
                    }, 3);

                    grid.refreshColumns();

                    grid.refresh();

                });
        }

    });
