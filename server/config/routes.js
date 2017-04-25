console.log('future routes.');
var user = require('../controllers/UsersController.js')
var list = require('../controllers/ListsController.js')

module.exports = function (app) {
	app.post('/login', function(req, res) {
		user.login(req, res);
	});
	app.post('/list/:user', function(req, res) {
		list.create(req, res);
	});
	app.post('/check/:id', function(req, res) {
		list.check(req, res);
	});
	app.get('/list',function(req,res){
		list.index(req,res);
	});
	app.get('/list/:user',function(req,res){
		list.show(req,res);
	});
	app.get('/user',function(req,res){
		user.index(req,res);
	});
	app.get('/user/:id',function(req,res){
		user.show(req,res);
	});
}