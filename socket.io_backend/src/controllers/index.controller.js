const mongoose = require('mongoose')
const sha256 = require('sha256')

const config = require('../config/')
const Friend = require('../models/friend.model.js')
const Message = require('../models/message.model.js')
const Room = require('../models/room.model.js')
const User = require('../models/user.model.js')

const controller={
	register: async(req,res)=>{
		// try{
			const isUser = await User.findOne({phone: req.body.phone})
			if(isUser){
				return res.status(300).json("Account is avaiable !!!")
			}
			else{
				const hashed = await sha256(req.body.password)	
				const newUser = User({
					name: req.body.name,
					phone: req.body.phone,
					password: hashed,
					// avatar:req.body.avatar,
				})
			
				const user = await newUser.save()
				if(user){
					return res.status(200).json(user)
				}
				return res.status(402).json('Register Failed !!!')
			}
		// }catch(err){
		// 	return res.status(500).json({err})
		// }

	},
	login: async(req,res)=>{
		console.log('helo')
		// try{
		// 	const user = await User.findOne({username: req.body.name})
		// 	if(!user){
		// 		return res.status(404).json("Số điện thoại không tìm thấy !!!")
		// 	}
		// 	const hashed = await sha256(req.body.password)
		// 	const isValidPassword = (user.password === hashed) ? true:false
		// 	if(!isValidPassword){
		// 		return res.status(404).json("Mật khẩu không chính xác !!!")
		// 	}
		// 	if(user && isValidPassword){
		// 		config.user = user
		// 		user.isOnline = true
		// 		return res.status(200).json(user)
		// 	}
		// }catch(err){
		// 	return res.status(500).json(err)
		// }
	},
	updateUser: async(req,res)=>{
		console.log('helo')
	},		
	addFriend: async(req,res)=>{
		console.log('helo')
	},
	deleteFriend: async(req,res)=>{
		console.log('helo')

	},
	createRoom: async(req,res)=>{
		console.log('helo')

	},
	addFriendInRoom: async(req,res)=>{
		console.log('helo')

	},
	outRoom: async(req,res)=>{
		console.log('helo')

	},
	deleteRoom: async(req,res)=>{
		console.log('helo')

	},
	addMessage: async(req,res)=>{
		console.log('helo')

	},
	deleteMessage: async(req,res)=>{
		console.log('helo')

	},
}
module.exports = controller