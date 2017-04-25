console.log('User Model')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
        name: {
          type: String,
          required: "Need a User name.",
          maxlength: 20
         },
		list: [{type: Schema.Types.ObjectId, ref: "List"}],

},{timestamps:true});


mongoose.model('User', UserSchema);
var User = mongoose.model('User');