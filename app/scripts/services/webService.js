'use strict';
angular.module('angularWebixApp')
    .factory('WebService', function($http) {

        function flatTableData() {
            return $http.get('data/flatTable.json');
        }

        function treeTableData() {
            return $http.get('data/treeTable.json');
        }

        function treeTableData2() {
            return $http.get('data/treeTable2.json');
        }

        return {
            flatTableData: flatTableData,
            treeTableData: treeTableData,
            treeTableData2: treeTableData2
        };
    });
