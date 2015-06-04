(function () {
    "use strict";

    angular.module('app.home').controller('HomeController', ['$scope', 'SprintResource', function ($scope, SprintResource) {

        $scope.sprints = [];            

        $scope.showMessage = function () {
            $scope.test = 'showing message';
            console.log('showing message');
        }

        SprintResource.get().$promise.then(function (response) {
            $scope.sprints = response.results;
            console.log(response.results);
        });

        console.log('home controller');

    }]);

})();