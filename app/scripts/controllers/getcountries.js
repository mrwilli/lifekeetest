'use strict';

angular.module('lifekeeApp')
  .controller('GetCountriesCtrl', function ($scope, $http) {
  	console.log('in controller: GetCountriesCtrl ')
  	var apiCountries = $http.get('http://lifekee.18feats.com/api/v1/country')
  		.then(function(response){
  			$scope.countries = response.data.objects;
  		}, function(response){
  			throw new Error('Server down')
  		});
  });
