angular.module('angularWebixApp')
    .factory('FlatTableProvider', function() {

        function FlatTableProvider(container, columns, data, configs) {
            var me = this;
            var _configs = angular.extend({}, {
                container: container,
                view: 'datatable',
                select: 'cell',
                multiselect: true,
                dragColumn: true,
                resizeColumn: true,
                resizeRow: true,
                // frozen column
                leftSplit: 2,
                autoheight: false,
                autowidth: false,
                headermenu: {
                    width: 250,
                    autoheight: false,
                    scroll: true
                },
                columns: columns,
                data: data,
                onContext: {
                    /*"myActive": function(id, event, target) {
                        webix.message("Active area was right-clicked");
                    }*/
                }
            }, configs || {});

            this.grid = webix.ui(_configs);

            // put event listeners in controller so that we can remove them!
            this.grid.attachEvent("onItemClick", function(id, e, node) {
                var item = this.getItem(id);
                console.log(item);
            });
            this.grid.attachEvent('onBeforeContextMenu', function(id, e, node) {
                var item = this.getItem(id);
                console.log(item);
                console.log(e);
                console.log(node);
                me.grid.select(item.id, 'title', false);
            });

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

        FlatTableProvider.prototype.addContextMenu = function() {
            var me = this;
            var menu = webix.ui({
                view: "contextmenu",
                data: ["Add", "Rename", "Delete", {
                    $template: "Separator"
                }, "Info"],
                master: "flatTable",
                on: {
                    onItemClick: function(id) {
                        webix.message(this.getItem(id).value);
                        console.log(me.grid.getSelectedId());
                        webix.message(JSON.stringify(me.grid.getSelectedId()));
                    }
                }
            });

            // menu.attactTo(this.grid);
        };

        return FlatTableProvider;

    });
