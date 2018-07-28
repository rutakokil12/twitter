
  app.service('LoginService', function($q, $http) {
    var login = false;
    var login = function(username,password) {

            var deferred = $q.defer();

            var loginService = {
                method : 'GET',
                url: "userAuthentication.json"
            };

            $http(loginService)
                .then(function successCallback(response) {
                    userInfo = response.data;
                    
                    login = username === response.data.username && password === response.data.password;
                    
                    if(login){
                      sessionStorage.setItem("Name",username);
                      deferred.resolve(login);
                    }else{
                      deferred.reject(login);
                    }
                }, function errorCallback(response) {
                    deferred.reject(login);
                });
            return deferred.promise;
    };
    
    
    
    
    
    
    
    
    return {
      login : login
    }
    
  });