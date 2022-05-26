const mongoose = require('mongoose')

const message = mongoose.Schema({
	user_send: {
		type: String,
		require: true,
	},
	content:{
		type: String,
		require: true,
	},
	user_receive:{
		type: String,
	},
	room:{
		type:String,
	},
	counter:{
		type:Number,
		require: true,
	},
	time:{
		type:String,
		require:true,
	},

},{timestamps: true})

module.exports = mongoose.model("Message", message)

