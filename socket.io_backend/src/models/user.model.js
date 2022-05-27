const mongoose = require('mongoose')

const customer = mongoose.Schema({
	name:{
		type: String,
		require:true,
		default:"",
	},
	phone:{
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

module.exports = mongoose.model("Customer", customer)

