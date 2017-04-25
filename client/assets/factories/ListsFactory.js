console.log('Lists Factory');
myApp.factory('ListsFactory',['$http',function ($http) {
	var factory = {};
	factory.index = function(callback){
		$http.get('/list').then(function(returned_data){
			callback(returned_data.data);
		})
	}
	factory.index2 = function(id,callback){
		$http.get('/list/'+id).then(function(returned_data){
			callback(returned_data.data);
		})
	}
	factory.create = function(newList,user,callback){
		$http.post('/list/'+user, newList).then(function(returned_data){
			if(typeof(callback)=='function'){
				console.log('returned_data',returned_data.data)
				callback(returned_data.data);
			}
		})
	}
	factory.check = function(id,callback){
		$http.post('/check/'+id).then(function(returned_data){
			if(typeof(callback)=='function'){
				console.log('returned_data',returned_data.data)
				callback(returned_data.data);
			}
		})
	}


	return factory;
}]);