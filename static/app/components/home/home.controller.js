(function () {
    "use strict";

    angular.module('app.home').controller('HomeController', ['$scope', 'SprintResource', function ($scope, SprintResource) {

        $scope.sprints = [];
        $scope.flags = {};            

        $scope.showMessage = function () {
            $scope.test = 'showing message';
            console.log('showing message');
        }

        
        $scope.flags.loading = true;
        
        SprintResource.get().$promise.then(function (response) {
            $scope.sprints = response.results;
            console.log(response.results);
        }).
        finally(function () {
            $scope.flags.loading = false;
        });

        console.log('home controller');


    }]);

})();