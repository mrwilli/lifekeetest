'use strict';

angular.module('lifekeeApp')
  .service('SignupSrvc', function Signup($http) {
    return {
    	signup: function(form){
  				var postData = 
  				{
						"username": form.username,
						"first_name": form.first_name,
						"last_name": form.last_name,
						"country": "/api/v1/country/"+form.country+"/",
						"password": form.password,
						"email":form.email
					}

					postData =  JSON.stringify(postData)
  				return $http.post('http://lifekee.18feats.com/api/v1/auth/user',postData,{
  					headers:{
  						"Content-Type":"application/json"
  					}
  				})
  					
    	}
    }
  });
