const mongoose = require('mongoose')

const room = mongoose.Schema({
	name:{
		type:String,
		require: true
	}
	admin: {
		type: String,
		require: true,
	},
	member:{
		type:Array,
		default: [],
		require:true,
	},
	limitMember:{
		type:Number,
		default:200,
		require: true,
	},
},{timestamps: true})

module.exports = mongoose.model("Room", room)

