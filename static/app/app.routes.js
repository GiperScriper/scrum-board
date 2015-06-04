(function () {
	"use strict";

	angular.module('app.routes', ['ngRoute']).config(['$routeProvider', 
		function ($routeProvider) {
			
			$routeProvider.
	        
			when('/', {
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