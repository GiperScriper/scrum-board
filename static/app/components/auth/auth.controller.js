(function () {
    "use strict";

    angular.module('app.auth').controller('AuthController', ['$scope', 'AuthService', function ($scope, AuthService) {

        $scope.testClick = function (user) {
            console.log(user);
            
            AuthService.getToken({
                "username": user.email, 
                "password": user.password,
            
            }).$promise.then(function (response) {
                console.log(response);
            });
        }


    }]);

})();