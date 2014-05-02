'use strict';

angular.module('lifekeeApp')
  .controller('SignupCtrl', function ($scope,$location, SignupSrvc) {
  	$scope.signupForm = {
						"username": '',
						"first_name":'',
						"last_name": '',
						"country": '',
						"password": '',
						"email":''
					}
    $scope.signup = function(){
      	SignupSrvc.signup($scope.signupForm)
      	.success(function(data){
					$location.path('/success_signup');

				})
				.error(function(data){
					console.log(data)
				});
    }
  });
