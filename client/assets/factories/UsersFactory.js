console.log('Users Factory');
myApp.factory('UsersFactory', ['$http',function ($http) {
	var factory = {};

	factory.index = function(callback){
		$http.get('/user').then(function(returned_data){
			callback(returned_data.data);
		})
	}
	factory.index2 = function(user,callback){
		$http.get('/user/'+user).then(function(returned_data){
			callback(returned_data.data);
		})
	}
	factory.login = function(newUser, callback){
		console.log('factory info', newUser)
		$http.post('/login',newUser).then(function(returned_data){
			console.log("returned_data",returned_data.data);
			if (typeof(callback) == 'function'){
		  		callback(returned_data.data);
			}			
		})
		.catch(function(err){
			console.log(err);
		});
	}

	return factory;
}])