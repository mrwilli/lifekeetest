'use strict';

angular.module('lifekeeApp')
  .service('GetCountriesSrvc', function GetCountries($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
    	getcountries : function(){
    		console.log('in service: GetCountriesSrvc')
    		$http.get('http://lifekee.18feats.com/api/v1/country',{})
    	}
    	
    }
  });
