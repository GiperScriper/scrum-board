(function () {
    "use strict";

    angular.module('app', [ 

        // general
        'app.routes',
        'app.config',        
        'app.api',

        // views
        'app.home',
        'app.about',

        // third party modules
        'ui.bootstrap'
    ]);

})();