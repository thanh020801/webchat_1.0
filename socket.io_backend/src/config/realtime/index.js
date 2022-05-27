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
                socket.name = data.phone
                user.isOnline = true
                socket.emit('SERVER-LOGIN-SUCCESS',user)
                io.sockets.emit('SERVER-LOGIN', socket.name)
            }
        })
    })

}
module.exports = realtime
