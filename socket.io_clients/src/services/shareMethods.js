import connectAPI from '@/services/API.js'
import router from '@/router'
// import { userStore,messagesStore,friendStore,roomStore } from "@/stores/sendStore.js"

// const user = userStore()
// const messages = messagesStore()
// const friend = friendStore()
// const room = roomStore()

export const shareMethod = {
	getTime:()=>{
		var today= new Date()
		return today.getHours() + ":" + today.getMinutes()
	}
}

export const API ={
	register: (data)=>{
		connectAPI('POST', '/register', data)
		.then((res)=>{
			console.log(res.data)
			router.push('/login')

		}).catch((err)=>{
			alert(err.response.data)
		})
	}
}
