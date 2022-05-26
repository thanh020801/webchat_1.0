const mongoose = require('mongoose')

const friend = mongoose.Schema({
	name:{
		type:String,
		require: true,
	},
	user_id:{
		type:String,
		require: true,
	},
	listFriend:{
		type:Array,
		default: [],
	},
	
},{timestamps: true})

module.exports = mongoose.model("Friend", friend)

