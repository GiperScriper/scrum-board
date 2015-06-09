(function () {
    "use strict";

    angular.module('app', [
        
        // routes 
        'app.routes',

        // api
        'app.api',

        // views
        'app.home',
        'app.about',

        // third party modules
        'ui.bootstrap'
    ]);

})();