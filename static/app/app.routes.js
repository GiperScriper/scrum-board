(function () {
	"use strict";

	angular.module('app.routes', ['ngRoute', 'ngResource']).config(['$routeProvider', '$resourceProvider',
		function ($routeProvider, $resourceProvider) {
			
			// disabled to strip trailing slashes
			$resourceProvider.defaults.stripTrailingSlashes = false;
			
			$routeProvider.
	        
			when('/home', {
	            templateUrl: '/static/app/components/home/home.view.html',
	            controller: 'HomeController'            
	        }).

	        when('/about', {
	            templateUrl: '/static/app/components/about/about.view.html',
	            controller: 'AboutController'            
	        }).
	        
	        otherwise({
	            redirectTo: '/'
	        });
		
		}]);

})();