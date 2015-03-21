angular.module('angularWebixApp')
    .factory('TreeTableColumnProvider2', function() {
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
        }];

    });
