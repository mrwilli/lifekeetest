'use strict';

angular.module('LoginApp')
  .factory('AuthSrvc', function ($http, Session) {
    
    return {
    	login: function(credentials){
    		var postData = {
  					'grant_type':'password',
						'client_id':'0045862b134674a41963',
						'client_secret':'19fdae4133564017a12307f1a6cc7645237cb199',
						'username':credentials.username,
						'password':credentials.password,
						'scope':'write'
  				}
    		 
  				return $http
  				.post('http://lifekee.18feats.com/oauth2/access_token',postData)
  				.then(function(response){
  					Session.create(response, credentials.persist);
  					console.log(Session)
  				})
    	},
    	logout:function(){
    		var postData = {
    			oauth_consumer_key:Session.access_token
    		}
  				return $http.post('http://lifekee.18feats.com/oauth2/logout',postData)
  				
    	},

    	isAuthenticated: function(){
    		return !!Session.access_token;
    	}



    }



  })
  .service('Session',function(){
  	this.create = function(response,persist){
  		console.log(response)
  		this.access_token = response.data.access_token;
  		this.scope = response.data.scope;
  		this.expires_in = response.data.expires_in;
  		this.refresh_token = response.data.refresh_token;
  		this.isLogged = true;
  		if(persist){
  			localStorage.session = JSON.stringify(this);
  		}
  	};

  	this.destroy = function() {
  		this.access_token = null;
  		this.scope = null;
  		this.expires_in = null;
  		this.refresh_token = null;
  		localStorage.session = null;
  		this.isLogged = false;
  	};

  	return this

  })
