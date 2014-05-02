'use strict';

angular.module('LoginApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $location, AUTH_EVENTS, AuthSrvc) {

    $scope.credentials = 	{
		    										username:'18feats', 
		    										password:'feats2013',
		    										persist: false
		    									};

		$scope.login = function(credentials){
			AuthSrvc.login(credentials).then(function(){
				$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
				$location.path('/dashboard');
			}, function(){
				$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
			});
		};


  	/*
  	console.log('in controller')
    $scope.loginForm = {
    										username:'18feats', 
    										password:'feats2013',
    										persist: false
    									};

    function saveSession(data,persist){
    	if(persist){
    		//save on localstorage
    		console.log('save on localstorage')
    		localStorage.session = JSON.stringify(data); 
    	}else{
    		//save on sessionstorage
    		console.log('save on sessionstorage')
    		sessionStorage.session = JSON.stringify(data);
    	}
    }

    $scope.login = function(){
      	LoginSrvc.login($scope.loginForm)
      	.success(function(data){
      		saveSession(data,$scope.loginForm.persist);
					$location.path('/dashboard');

				})
				.error(function(data){
					$scope.loginFail = true;
				});
    }

    */



  });


angular.module('lifekeeApp')
	.controller('LogoutCtrl', function($scope, $location, $http, AuthSrvc, Session){
		$scope.logout = function(){
			console.log('LOGOUT');
			AuthSrvc.logout()
			.then(function(){
				Session.destroy();
				$location.path('/login');
			})
		}
	})