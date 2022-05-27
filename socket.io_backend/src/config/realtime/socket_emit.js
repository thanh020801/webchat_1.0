const socket_on = require('./socket_on.js')
module.exports ={
	style1 : (socket)=>{
		socket.emit('',data)
	},
	style2: (io)=>{
		io.sockets.emit('',data)
	}
}