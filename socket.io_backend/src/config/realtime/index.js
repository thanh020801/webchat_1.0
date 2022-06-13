const socket_emit = require('./socket_emit.js')
const socket_on = require('./socket_on.js')

const mongoose = require('mongoose')
const sha256 = require('sha256')

const config = require('../../config/index.js')
const Friend = require('../../models/friend.model.js')
const Message = require('../../models/message.model.js')
const Room = require('../../models/room.model.js')
const User = require('../../models/user.model.js')
// logout,friend Online,
realtime = (io)=>{
    io.on('connection', (socket) => {
        socket.on('CLIENT-REGISTER',async(data)=>{
            const isUser = await User.findOne({phone: data.phone})
            if(isUser){
                socket.emit('REGISTER-STATUS',"Register failed")
                return
            }
            else{
                const hashed = await sha256(data.password)  
                const newUser = User({
                    name: data.name,
                    phone: data.phone,
                    password: hashed,
                    // avatar:req.body.avatar,
                })
                const user = await newUser.save()
                const newFriend = Friend({
                    userId: user._id,
                    name: user.name,
                    listFriend:[{phone: data.phone}]
                })
                const friend = await newFriend.save()
                if(user && friend){
                    // console.log(user,friend)
                    console.log(user.phone)
                    socket.join(user.phone)
                    console.log(socket.adapter.rooms)
                    // socket.leave(user.phone)
                    // console.log(socket.adapter.rooms)
                    socket.emit('REGISTER-STATUS',"Register successfully")
                    return 
                }
            }
            return
        })


        socket.on('CLIENT-LOGIN',async(data)=>{
            const user = await User.findOne({phone: data.phone})
            // console.log("data",data,"user",user)
            if(!user){
                socket.emit('LOGIN-STATUS',{success:false})
                return;
            }

            const hashed = await sha256(data.password)
            const isValidPassword = (user.password === hashed) ? true:false
            
            if(!isValidPassword){
                socket.emit('LOGIN-STATUS',{success:false})
                return
            }
            if(user && isValidPassword){
                socket.phone = user.phone
                socket.listFriend = []
                config.socket.onlines.push({phone: socket.phone})
                // socket.onlines.push({phone: socket.phone, onl: true})
                friends = await Friend.findOne({userId: user._id})

                for(var i =0;i<friends.listFriend.length;i++){
                    var temp = friends.listFriend[i].phone
                    socket.join(temp)
                    
                    if(config.socket.onlines.findIndex(i=> i.phone === temp) >= 0){
                        socket.listFriend.push({phone: friends.listFriend[i].phone,onl: true})
                    }else{
                        socket.listFriend.push({phone: friends.listFriend[i].phone,onl: false})
                    }
                }
                socket.emit('LOGIN-STATUS', {
                        success: true,
                        user, 
                        listFriend: socket.listFriend
                    }
                )
                io.to(socket.phone).emit('FRIEND-ONLINE',{
                        phone: socket.phone,
                        onlines:config.socket.onlines,
                        onl:true
                    }
                )
            }
        })


        socket.on('CLIENT-LOGOUT', async data =>{
            console.log('phone',data.phone)
            var temp1 = config.socket.onlines.findIndex(i=> i.phone === data.phone)
            if(temp1 >= 0){
                
                var temp2 = socket.listFriend.findIndex(i=> i.phone === data.phone)
                // console.log('temp',temp)
                // socket.phone = null
                config.socket.onlines.splice(temp1,1)
                socket.listFriend.splice(temp2,1)
                io.to(data.phone).emit('LOGOUT-STATUS',{
                    // phone: socket.phone,
                    onlines:config.socket.onlines}
                )
            }
            // console.log('temp',temp)
            // config.socket.onlines.splice(item,1)
            // io.to(data.phone).emit('LOGOUT-STATUS',)
        })

        socket.on('SEARCH',async data =>{
            const search = await User.findOne({phone:data})
            if(!search){
                socket.emit('SEARCH-STATUS',{success: false})
            }else{
                const friend = await Friend.findOne({userId:search._id})
                
                if(friend.listFriend.findIndex(i => i.phone === socket.phone) >= 0){
                    socket.emit('SEARCH-STATUS',{success: true,isFriend: true,search})
                }else{
                    socket.emit('SEARCH-STATUS',{success: true,isFriend:false,search})
                }
            }
        })

        socket.on("CLEAR", ()=>{
            config.socket.onlines = []
            socket.friendsOnline = []
            console.log("listFriend", config.socket.onlines,"online",socket.friendsOnline)
        })

        socket.on('INVITE-ADDFRIEND', async(data)=>{
            checkInvites = await Friend.findOne({userId: data.user._id})
            var temp = checkInvites.invites.findIndex(i=>i.phone === data.phoneInvited)
            if(temp < 0){
                const userInvite = await Friend.findOneAndUpdate(
                        {userId:data.user._id},
                        {$push:{invites: {phone: data.phoneInvited}}},
                        {new: true})

                const userReceive = await User.findOne({phone:data.phoneInvited})
                const friend = await Friend.findOneAndUpdate(
                    {userId: userReceive._id},
                    {$push:{receives: {phone: data.user.phone}}},
                    {new: true})
                console.log(userInvite,friend)     
            }else{
                console.log("Đã gửi lời mời")
            }
            socket.emit('INVITE-STATUS',{success:true} )
        })
    })

}
module.exports = realtime
        // socket.on('CLIENT-LOGIN', async data=>{
        //     const user = await User.findOne({phone: data.phone})
        //     // console.log("data",data,"user",user)
        //     if(!user){
        //         socket.emit('LOGIN-FAILED')
        //         return;
        //     }

        //     const hashed = await sha256(data.password)
        //     const isValidPassword = (user.password === hashed) ? true:false

        //     if(!isValidPassword){
        //         socket.emit('LOGIN-FAILED')
        //         return
        //     }

        //     if(user && isValidPassword){
        //         const onlineUser = await User.findOneAndUpdate({phone:user.phone},{isOnline:true},{new:true})
        //         // console.log(onlineUser)
        //         const friends = await Friend.findOne({userId: user._id})
        //         const listFriend = []
        //         const listFriendOnline = []
        //         // console.log(friends)
        //         // console.log("ban cua ",user.name,"la: ",friends.listFriend.length)
        //         for(var i=0 ; i< friends.listFriend.length;i++){
        //             var temp = friends.listFriend[i].phone
        //             const friend = await User.findOne({phone: temp})
        //             if(listFriend.indexOf(temp) < 0){
        //                 listFriend.push(friend)
        //                 if(friend.isOnline){
        //                     listFriendOnline.push({phone: friend.phone})
        //                 }
        //             }
        //         }
        //         socket.name = data.phone
        //         socket.emit('SERVER-LOGIN-SUCCESS',{onlineUser,listFriend,listFriendOnline})
        //         io.sockets.emit('SERVER-LOGIN-LIST-FRIEND', {listFriendOnline})
        //         return
        //     }
        // })

















        //         socket.on('CLIENT-LOGIN',async(data)=>{
        //     const user = await User.findOne({phone: data.phone})
        //     // console.log("data",data,"user",user)
        //     if(!user){
        //         socket.emit('LOGIN-STATUS',{success:false})
        //         return;
        //     }

        //     const hashed = await sha256(data.password)
        //     const isValidPassword = (user.password === hashed) ? true:false
            
        //     if(!isValidPassword){
        //         socket.emit('LOGIN-STATUS',{success:false})
        //         return
        //     }
        //     if(user && isValidPassword){
        //         socket.phone = user.phone
        //         config.socket.onlines.push({phone: user.phone})
        //         socket.friendsOnline = []
        //         friends = await Friend.findOne({userId: user._id})
        //         for(var i =0;i<friends.listFriend.length;i++){
        //             var temp = friends.listFriend[i].phone
        //             socket.join(temp)
                    
        //             if(config.socket.onlines.findIndex(i=> i.phone === temp) >= 0){

        //                 socket.friendsOnline.push({phone: friends.listFriend[i].phone})
                        
        //             }
        //         }
                
        //         socket.emit('LOGIN-STATUS',{success:true,user,friendsOnline:socket.friendsOnline,listFriend: friends.listFriend})
        //         io.to(socket.phone).emit('FRIEND-ONLINE',{phone: socket.phone})
        //         return
        //     }
        // })

        // socket.on('SEARCH',async data =>{
        //     const friend = await User.findOne({phone:data})
        //     if(!friend){
        //         socket.emit('SEARCH-STATUS',{success: false})
        //     }else{
        //         socket.emit('SEARCH-STATUS',{success: true,friend})
        //     }
        // })
        // socket.on('CLIENT-LOGOUT', async data =>{
        //     console.log('phone',data.phone)
        //     if(config.socket.onlines.findIndex(i=> i.phone === data.phone)>=0){
        //         var temp1 = config.socket.onlines.findIndex(i=> i.phone === data.phone)
        //         var temp2 = socket.friendsOnline.findIndex(i=> i.phone === data.phone)
        //         // console.log('temp',temp)
        //         // socket.phone = null
        //         config.socket.onlines.splice(temp1,1)
        //         socket.friendsOnline.splice(temp2,1)
        //         io.to(data.phone).emit('LOGOUT-STATUS',{phone: data.phone})
        //     }
        //     // console.log('temp',temp)
        //     // config.socket.onlines.splice(item,1)
        //     // io.to(data.phone).emit('LOGOUT-STATUS',)
        // })