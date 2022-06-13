const mongoose = require('mongoose')

const friend = mongoose.Schema({
	name:{
		type:String,
		require: true,
	},
	userId:{
		type:String,
		require: true,
	},
	listFriend:{
		type:Array,
		default: [],
	},
	invites:{
		type:Array,
		default: [],
	},
	receives:{
		type:Array,
		default: [],
	}
	
},{timestamps: true})

module.exports = mongoose.model("Friend", friend)

