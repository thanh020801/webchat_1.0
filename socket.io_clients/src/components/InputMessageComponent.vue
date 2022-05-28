<template>

<div class="inputMessage card-footer text-muted d-flex justify-content-start align-items-center p-3 col-12">
    	<img 
		    	src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
		      alt="avatar 3" 
      />
	    <input
	    		@keyup.enter="getMessage()"
			    type="text" 
			    class="form-control form-control-lg " 
			    id="exampleFormControlInput1"
		      placeholder="Type message"
		      v-model='message'
	     />
      <span class="ms-3 text-muted"><i class="bi bi-paperclip"></i></span>
	    <span class="ms-3 text-muted"><i class="bi bi-emoji-smile-fill"></i></span>
	    <span class="ms-3 text-muted" @click='getMessage()'><i class="bi bi-send-fill"></i></span>
</div>
</template>
<script>
	import {shareMethod} from '@/services/shareMethods.js'
	export default{
		data(){
			return {
				message: "",
				time: "",
				like: false,
			}
		},
		methods:{
			getMessage(){
				if(this.message !== ""){
					this.time =  shareMethods.getTime()
					const req = {message:this.message,time:this.time,like:this.like}
					this.$emit('handelMessage', req)
					this.message = ""
				}
			}
		}
		
	}
</script>
<style type="text/css" scoped>
i{
	font-size: 20px;
}
.inputMessage{
	width: 100%;
	position: fixed;
}
input{
	margin: 0 1rem;
	width: 50%;
	background-color: #36404a;
	border: none;
	border-radius: 50px;
	color: wheat;
}
input:focus{
	background-color: rgb(48, 56, 65);
	color: white;
	border: none;
}
img{
	width: 40px; 
	height: 100%;
}

</style>