const shareMethod = {
	getTime:()=>{
		var today= new Date()
		return today.getHours() + ":" + today.getMinutes()
	}
}

export default shareMethod