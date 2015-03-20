angular.module('angularWebixApp')
    .factory('TreeTable', function() {
        return function(container, columns, data) {
            return webix.ui({
                container: container,
                view: "treetable",
                selection: 'row',
                columns: columns,

                autoheight: false,
                autowidth: true,
                data: data

            });
        }
    });
