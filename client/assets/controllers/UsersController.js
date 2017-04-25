myApp.controller('UsersController',['$scope','UsersFactory','$location','$cookies',function ($scope,UsersFactory,$location,$cookies) {
	$scope.user = $cookies.get('user_name');
	$scope.messages = [];

    $scope.login = function(){
        UsersFactory.login($scope.user, function(data){
            if(data.errors){
                if(typeof(data.errors) == "object"){
                    angular.forEach(data.errors, function(v, k){
                        $scope.messages.push(data.errors[k].message);
                    })
                }
                else{
                    $scope.messages.push(data.errors);
                    $location.url("/");
                }
            }
            else{
                $cookies.put("user_name", data.name);
                console.log($cookies.get("user_name"));
                $location.url("/dashboard");
            }
        })
    },
    $scope.logout = function(){
        var cookies = $cookies.getAll();
        angular.forEach(cookies,function(v,k){
            $cookies.remove(k);
        });
        console.log("User name", $cookies.get('user_name'));
        $location.url('/');
    }
}]);