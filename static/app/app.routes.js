(function () {
	"use strict";

	angular.module('app.routes', ['ngRoute', 'ngResource']).config(['$routeProvider', '$resourceProvider', '$locationProvider',
		function ($routeProvider, $resourceProvider, $locationProvider) {
			
			// disabled to strip trailing slashes
			$resourceProvider.defaults.stripTrailingSlashes = false;

			// enable html5Mode
			//$locationProvider.html5Mode(true);
			
			$routeProvider.
	        
	        when('/', {
	            templateUrl: '/static/app/components/auth/login.view.html',
	            controller: 'AuthController'            
	        }).

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