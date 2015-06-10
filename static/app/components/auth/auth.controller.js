(function () {
    "use strict";

    angular.module('app.auth').controller('AuthController', ['$scope', 'AuthService', function ($scope, AuthService) {

        $scope.testClick = function (user) {
            
            var user_data = {           
                "username": user.email, 
                "password": user.password 
            }         
            

            console.log(user_data);
           
            AuthService.login(user_data).$promise.then(function (response) {
                //console.log(response.token);
                window.location.href = '/';
            });
        }


    }]);

})();