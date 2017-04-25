console.log('Bucket List Model')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new mongoose.Schema({
	check:{
		type: Boolean,
		default:false
	},
	title: {
		type: String,
		required: "Must be at least 5 characters long",
		minlength: 5
	},
	description: {
		type:String,
		required: "Must be at least 10 characters long",
		minlength: 10
	},
	_user:{
		type: Schema.Types.ObjectId, ref: "User"
	},
	other:{
		type: String,
	}
},{timestamps:true});

mongoose.model('List', ListSchema);
var List = mongoose.model('List');

