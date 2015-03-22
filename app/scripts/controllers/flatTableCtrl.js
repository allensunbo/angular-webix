'use strict';

/**
 * @ngdoc function
 * @name angularWebixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebixApp
 */
angular.module('angularWebixApp')
    .controller('FlatTableCtrl', function($scope, $http, FlatTableProvider,
        FlatTableColumnProvider, WebService) {

        var tableProvider, grid, loaded = false;

        WebService.flatTableData()
            .success(function(response) {
                var columns = angular.copy(FlatTableColumnProvider);
                tableProvider = new FlatTableProvider('flatTable', columns, response.data);
                grid = tableProvider.grid;
                loaded = true;
                tableProvider.addContextMenu();
            });

        $scope.removeColumn = function() {
            tableProvider.removeColumn(2);
        };

        $scope.addColumn = function() {
            var newColumn = {
                id: webix.uid(),
                header: "New column"
            };
            tableProvider.addColumn(2, newColumn);
        };

        $scope.addRow = function() {
            tableProvider.addRow({
                id: webix.uid(),
                title: webix.uid()
            });
        }

        $scope.removeSelectedRows = function() {
            tableProvider.removeSelectedRows();
        }
    });
