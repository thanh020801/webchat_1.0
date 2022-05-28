const socket_emit = require('./socket_emit.js')
const socket_on = require('./socket_on.js')

const mongoose = require('mongoose')
const sha256 = require('sha256')

const config = require('../../config/index.js')
const Friend = require('../../models/friend.model.js')
const Message = require('../../models/message.model.js')
const Room = require('../../models/room.model.js')
const User = require('../../models/user.model.js')

realtime = (io)=>{
    io.on('connection', (socket) => {
        socket.on('CLIENT-LOGIN', async data=>{
            const user = await User.findOne({phone: data.phone})
            if(!user){
                socket.emit('LOGIN-FAILED')
                return;
            }

            const hashed = await sha256(data.password)
            const isValidPassword = (user.password === hashed) ? true:false

            if(!isValidPassword){
                socket.emit('LOGIN-FAILED')
                return
            }

            if(user && isValidPassword){
                const onlineUser = await User.findOneAndUpdate({phone:data.phone},{isOnline:true},{new:true})
                // console.log(onlineUser)
                const friends = await Friend.findOne({phone: data.phone})
                const listFriend = []
                for(var i=0 ; i< friends.listFriend.length;i++){
                    var temp = friends.listFriend[i].phone
                    const friend = await User.findOne({phone: temp})
                    if(listFriend.indexOf(temp) < 0){
                        listFriend.push(friend)
                    }
                }
                socket.name = data.phone
                socket.emit('SERVER-LOGIN-SUCCESS',{onlineUser,listFriend})
                io.sockets.emit('SERVER-LOGIN', socket.name)
                return
            }
        })

        socket.on('CLIENT-LOGOUT',async ()=>{
            const user = await User.findOneAndUpdate(
                {phone: socket.name},
                {isOnline: false},
                {new:true}
            )
            io.sockets.emit('SERVER-LOGOUT', "")
        })
    })

}
module.exports = realtime
