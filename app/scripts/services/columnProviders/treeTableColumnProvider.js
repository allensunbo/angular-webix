angular.module('angularWebixApp')
    .factory('TreeTableColumnProvider', function() {
        return [{
            id: "id",
            header: "",
            css: {
                "text-align": "right"
            },
            width: 50
        }, {
            id: "value",
            header: "Film title",
            width: 250,
            template: "{common.treetable()} #value#"
        }, {
            id: "chapter",
            header: "Mode",
            width: 200
        }];

    });
