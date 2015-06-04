(function () {
    "use strict";

    angular.module('app.home').controller('homeController', function ($scope) {

        $scope.messages = {};
        $scope.messages.greeting = 'ky-ky';        
        
        console.log($scope.messages.greeting);        

        $scope.showMessage = function () {
            $scope.test = 'showing message';
            console.log('showing message');
        }

    });


})();