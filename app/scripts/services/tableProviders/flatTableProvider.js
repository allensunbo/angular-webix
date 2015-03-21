angular.module('angularWebixApp')
    .factory('FlatTableProvider', function() {

        function FlatTableProvider(container, columns, data, configs) {
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

        FlatTableProvider.prototype.removeColumn = function(columnIndex, refresh) {
            var columns = webix.toArray(this.grid.config.columns);
            columns.removeAt(columnIndex);
            if (refresh === undefined || refresh) {
                this.grid.refreshColumns();
            }
        };

        FlatTableProvider.prototype.addColumn = function(index, newColumn, refresh) {
            var columns = webix.toArray(this.grid.config.columns);
            columns.insertAt(newColumn, index);
            if (refresh === undefined || refresh) {
                this.grid.refreshColumns();
            }
        };

        FlatTableProvider.prototype.addRow = function(row) {
            this.grid.add(row);
        }

        FlatTableProvider.prototype.removeSelectedRows = function() {
            var sel = this.grid.getSelectedId(true);
            if (!sel) return;
            for (var i = 0; i < sel.length; i++) {
                this.grid.remove(sel[i]);
            }

        }

        return FlatTableProvider;

    });
