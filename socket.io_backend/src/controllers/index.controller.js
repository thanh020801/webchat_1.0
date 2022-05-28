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
				return res.status(300).json("phone number is avaiable !!!")
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
				const newFriend = Friend({
					userId: user._id,
					name: user.name,
				})
			
				
				const friend = await newFriend.save()
				if(user && Friend){
					return res.status(200).json('Register successfully')
				}
				return res.status(402).json('Register Failed !!!')
			}
		// }catch(err){
		// 	return res.status(500).json({err})
		// }

	},
	login: async(req,res)=>{
		console.log('helo')

	},
	updateUser: async(req,res)=>{
		console.log('helo')
	},		
	addFriend: async(req,res)=>{
		const isFriend = await Friend.findOne({listFriend: {phone: req.body.phone}})
		if(!isFriend){
			const updateFriend = await Friend.findOneAndUpdate(
				{userId:req.params.idUser},
				{$push:{listFriend: {phone: req.body.phone}}},
				{new: true}
			)
			console.log(updateFriend)
			if(updateFriend){
				return res.status(200).json(updateFriend)
			}
			return res.status(402).json('AddFriend Failed !!!')			
		}else{
			return res.status(402).json('has friend')	
		}


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