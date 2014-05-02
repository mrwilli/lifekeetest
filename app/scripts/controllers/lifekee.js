'use strict';

angular.module('lifekeeApp')
  .controller('LifekeeCtrl', function ($scope, $route, $routeParams, $location, $rootScope,AuthSrvc, Session) {
  	//GLOBAL CONTROLLER

  	$scope.currentUser = null;


		$scope.session = Session;
		$scope.$on('$routeChangeStart', function(e,next,current){
			if(next.access!= undefined && !next.access.allowAnonymous && !$scope.session.isLogged){
				$location.path("/login");
			}
		});



		$rootScope.$on("$locationChangeStart", function (event, next, current) {
		  for (var i in window.routes) {
		    if (next.indexOf(i) != -1) {
		     	if (!window.routes[i].access.allowAnonymous && !userService.user.isLogged) {
		          console.log("error: you are not logged in");
	           	$location.path("/login");                                                 
	        }
	      }
	    }
    });
  	

  });
