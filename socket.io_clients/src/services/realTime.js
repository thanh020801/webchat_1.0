import io from "socket.io-client"
import { userStore,messagesStore,friendStore,roomStore } from "@/stores/sendStore.js"
const socketInstant =  io('http://localhost:5000')
const user = userStore()
const messages = messagesStore()
const friend = friendStore()
const room = roomStore()
const realtime={
	join: (data)=>{
		socketInstant.emit('CLIENT-LOGIN',data)

		socketInstant.on('SERVER-LOGIN-SUCCESS',data=>{
			user.profile = data
			// console.log("helo",user.profile)
		})
		socketInstant.on('LOGIN-FAILED',data=>{
			user.profile = data
		})
		socketInstant.on('SERVER-LOGIN',data=>{
			friend.list = data
			console.log("friend",friend.list)
		})
		
	},
	send: (data)=>{
		socketInstant.emit('CLIENT-SENT-MESSAGE',data)
		socketInstant.on('SERVER-SENT-MESSAGE',data=>{
			message.list = data
		})
	}
	
}

export default realtime