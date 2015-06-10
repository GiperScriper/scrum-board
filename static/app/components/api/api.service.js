(function () {
    "use strict";

    angular.module('app.api', ['ngResource']).factory("SprintResource", ['$resource',
        
        function ($resource) {
            return $resource(
                'api/v1/sprints/:id', {}, {
                    get: {
                        method: 'GET',                        
                    }
                }
            );
        }
    ]);
   
})();