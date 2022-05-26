function realtime(io){
io.on('connection', (socket) => {
    socket.on("connect:send", (data)=>{
    	socket.emit('connect:success-listUser',data)
    })
})

}
module.exports = realtime
