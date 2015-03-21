angular.module('angularWebixApp')
    .factory('TableProvider', function() {

        function FlatTableBuilder(container, columns, data, configs) {
            var _configs = angular.extend({}, {
                container: container,
                view: 'datatable',
                select: 'row',
                multiselect: true,
                dragColumn: true,
                resizeColumn: true,
                // frozen column
                leftSplit: 2,
                autoheight: false,
                // autowidth: true,
                columns: columns,
                data: data
            }, configs || {});

            this.grid = webix.ui(_configs);
        }

        FlatTableBuilder.prototype.removeColumn = function(columnIndex) {
            var columns = webix.toArray(this.grid.config.columns);
            columns.removeAt(columnIndex);
            this.grid.refreshColumns();
        };


        function TreeTableBuilder(container, columns, data) {
            return webix.ui({
                container: container,
                view: "treetable",
                selection: 'row',
                columns: columns,
                resizeColumn: true,

                leftSplit: 1,
                autoheight: false,
                // autowidth: true,
                data: data

            });
        }

        return {
            FlatTableBuilder: FlatTableBuilder,
            TreeTableBuilder: TreeTableBuilder
        };

    });
