var mongoose = require('mongoose');
var List = mongoose.model('List');
var User = mongoose.model('User');

module.exports = {

	index: function(req,res){
		List.find({})
			.populate('_user')
			.exec(function(err,list){
			if(err){
				console.log('You broke it');
				res.json(err)
			}
			res.json({list});
		});
	},
	show: function(req,res){
		User.findOne({name: req.params.user},function(err,user){
			if(err){
				res.json(err)
			}
			console.log('USER',user)
			List.find({_user:user},function(err,list){
				if(err){
					res.json(err);
				}
				res.json({list})
			})
		})
	},
	create: function (req,res){
		console.log('POST DATA',req.body);
		User.findOne({name:req.params.user}, function(err,user){
			if(err){
				res.json(err);
			}
			else{
				List.create({title: req.body.title, description: req.body.description, _user: user, other: req.body.other},function(err,list){
					if(err){
						res.json(err);
					}
					else{
						User.findOne({name:req.body.other},function(err,other){
							if(err){
								res.json(err);
							}
							else{
								console.log('New List Made!', list);
								user.list.push(list);
								user.save(function(err){
									if(err){
										res.json (err)
									}
								});
								other.list.push(list);
								other.save(function(err){
									if(err){
										res.json(err);
									}
								});
								res.json(list);	
							}
						})
					}
				})
			}
		})
	},
	check: function(req,res){
		List.findOne({_id:req.params.id},function(err,list){
			if(err){
				res.json(err);
			}
			if(list.check == false){
				list.check = true;
			}
			else if(list.check == true){
				list.check = false;
			}
			list.save()
			res.json(list)
		})
	}


}