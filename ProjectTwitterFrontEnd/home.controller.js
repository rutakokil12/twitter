
   app.controller('HomeController', function($scope, $stateParams, $state,$http) {
    
    $scope.userName = sessionStorage.getItem("Name");
    var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }
    $scope.postMessage = function(){
        $http.post('', $scope.message, config)
        .then(
          function(response){
             if(response.data)
            $scope.messagePosted = "Post Data Submitted Successfully!";
            $scope.status = response.status;
          $scope.statustext = response.statusText;
          $scope.headers = response.headers();
              }, 
          function(response){
          $scope.messagePosted = "Service not Exists";
          $scope.status = response.status;
          $scope.statustext = response.statusText;
          $scope.headers = response.headers();
              });
          }

    
   
  });