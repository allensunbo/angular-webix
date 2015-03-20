'use strict';

/**
 * @ngdoc function
 * @name angularWebixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebixApp
 */
angular.module('angularWebixApp')
    .controller('FlatTableCtrl', function($scope, FlatTable) {

        var grid = FlatTable("flatTable");

        $scope.removeColumn = function() {
            var columns = webix.toArray(grid.config.columns);
            columns.removeAt(2);
            grid.refreshColumns();
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
