import io from "socket.io-client"
const socketInstant =  io('http://localhost:5000')


function realtime(){
	return socketInstant
}

export default realtime