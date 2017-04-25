var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {

	index: function(req,res){
		User.find({},function(err,user){
			if(err){
				console.log('You broke it');
				res.json(err)
			}
			res.json({user});
		})

	},
	show: function(req,res){
		User.findOne({_id: req.params.id},function(err,user){
			if(err){
				res.json(err)
			}
			res.json({user});
		})
	},
	login: function(req,res){
		User.findOne({name:req.body.name}, function(err,user){
			if(err){
				res.json(err);
			}
			else if(!user){
				User.create(req.body,function(err,user){
				    if(err){
				        res.json(err);
				    }
				    else{
				        console.log('Created User!', user);
						res.json(user);
				    }	
				})
			}
			else{
				console.log('User logged in', user);
				res.json(user);
			}
		})
	},	
}