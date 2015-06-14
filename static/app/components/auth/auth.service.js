(function () {
    "use strict";

    angular.module('app.auth', ['ngResource']).factory("AuthService", ['$resource',
        
        function ($resource) {
            return $resource(
                '/api/v1/auth/token/', {}, {               
                    login: {
                        method: 'POST',                        
                    }
                }
            );
        }       
    ]);
   
})();