import axios from 'axios'

const API = (method="get",endpoint='/',data=null)=>{
	return axios({
		method:method,
		url: `http://localhost:5000${endpoint}`,
		data:data,
		headers:{
			"Content-type":"Application/json",
		},
	})
}
export default API