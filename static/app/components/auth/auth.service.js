(function () {
    "use strict";

    angular.module('app.auth', ['ngResource']).factory("AuthService", ['$resource',
        
        function ($resource) {
            return $resource(
                '/api/v1/token-auth/', {}, {               
                    login: {
                        method: 'POST',                        
                    }
                }
            );
        }       
    ]);
   
})();