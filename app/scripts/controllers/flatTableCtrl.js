'use strict';

/**
 * @ngdoc function
 * @name angularWebixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebixApp
 */
angular.module('angularWebixApp')
    .controller('FlatTableCtrl', function($scope, $http, TableProvider,
        FlatTableColumnProvider, WebService) {

        var tableBuilder, grid, loaded = false;

        WebService.flatTableData()
            .success(function(response) {
                var columns = angular.copy(FlatTableColumnProvider);
                tableBuilder = new TableProvider.FlatTableBuilder('flatTable', columns, response.data);
                grid = tableBuilder.grid;
                loaded = true;
            });

        $scope.removeColumn = function() {
            tableBuilder.removeColumn(2);
        };

        $scope.addColumn = function() {
            var columns = webix.toArray(grid.config.columns);
            columns.insertAt({
                id: webix.uid(),
                header: "New column"
            }, 2);
            grid.refreshColumns();
        };

        $scope.addRow = function() {
            grid.add({
                id: webix.uid(), //adding  an item with two properties
                title: webix.uid()
            })
        }

        $scope.removeRow = function() {
            var sel = grid.getSelectedId(true);
            if (!sel) return;
            for (var i = 0; i < sel.length; i++) {
                grid.remove(sel[i]);
            }

        }
    });
