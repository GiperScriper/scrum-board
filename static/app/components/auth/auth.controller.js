(function () {
    "use strict";

    angular.module('app.auth').controller('AuthController', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {

        $scope.testClick = function (user) {
            
            var user_data = {           
                "username": user.email, 
                "password": user.password 
            }         
            

            console.log(user_data);
           
            AuthService.login(user_data).$promise.then(function (response) {
                // redirect to main page
                $location.path('/home');
                console.log(response.token);
            });
        }


    }]);

})();