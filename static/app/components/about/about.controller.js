(function () {
    "use strict";

    angular.module('app.about').controller('AboutController', function ($scope) {
        $scope.about = {};
        $scope.about.message = 'hello from about page';

        console.log('About Controller');

    });

})();