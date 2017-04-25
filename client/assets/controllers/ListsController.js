myApp.controller('ListsController',['$scope','UsersFactory','ListsFactory','$location','$cookies','$routeParams',function ($scope,UsersFactory,ListsFactory,$location,$cookies,$routeParams) {
	$scope.user = [];
	$scope.list = [];

	if(!$scope.user){
		$location.url('/')
	}

    var user_index2 = function () {
      UsersFactory.index2($routeParams.id,function(data) {
          console.log(data.user);
          $scope.user = data.user;
      })
    }
    var list_index2 = function (){
    	ListsFactory.index2($scope.user,function(data){
    		console.log(data.list);
    		$scope.list = data.list;
    	})    
    }
    user_index2();
    list_index2();


}]);