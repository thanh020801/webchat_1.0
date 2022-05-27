const socket_emit = require('./socket_emit.js')
module.exports ={
	style1 : (socket,address)=>{
		socket.on(address, data=>{
			console.log('data')
		})
	},

}