myApp.controller('DashboardController',['$scope','UsersFactory','ListsFactory','$location','$cookies',function ($scope,UsersFactory,ListsFactory,$location,$cookies) {
	$scope.user = $cookies.get('user_name');
	$scope.all_users = [];
	$scope.lists = [];
	$scope.messages = [];

	if(!$scope.user){
		$location.url('/')
	}
    var user_index = function () {
      UsersFactory.index(function(data) {
          console.log(data.user);
          $scope.all_users = data.user;
      })
    }
	var list_index = function () {
	  ListsFactory.index(function(data) {
	      console.log(data.list);
	      $scope.lists = data.list;
	  })
	}
	user_index();
	list_index();

	$scope.create = function(){
		ListsFactory.create($scope.newList, $scope.user, function(data){
			if(data.errors){
				if(typeof(data.errors) == 'object'){
					angular.forEach(data.errors,function(v,k){
						$scope.messages.push(data.errors[k].message)
					});
			
				$location.url('/dashboard')
				}
				else{
				$scope.messages.push(data.errors);
				
				$location.url('/dashboard')
				}
			}
			else{
			$scope.lists = data;
			$scope.newList = {};
			$scope.messages = [];
			user_index();
			list_index();
			$location.url("/dashboard")
			}
		})
	},
	$scope.check = function(id){
		ListsFactory.check(id,function(data){
			console.log("CHECK",data)
			user_index();
			list_index();
			$scope.messages = [];
			$scope.list = data
		})
	}


}])