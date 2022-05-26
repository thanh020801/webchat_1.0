const mongoose = require('mongoose')

const user = mongoose.Schema({
	username:{
		type: String,
		require:true,
		default:"",
	},
	sdt:{
		type: String,
		require:true,
		default:"",
		unique: true,
	},
	password:{
		type: String,
		require:true,
		default:"",
	},
	isOnline: {
		type: Boolean,
		default:false,
	},
	avatar:{
		type:String,
	},
	friend:{
		type:String,
	},
	status:{
		type: String,
		default:"",
	},
},{timestamps: true})

module.exports = mongoose.model("User", user)

