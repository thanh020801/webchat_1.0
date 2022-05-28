<template>
<div class="d-flex flex-row justify-content-end mb-4 bot-you">
	<div><i class="bi bi-heart-fill"></i></div>
	<div><i class="bi bi-three-dots-vertical"></i></div><br/>
  	
  	<div class="p-3 me-3" style="">
    	<p class="small mb-0">Thank you, I really like your product.</p>
    	<span class="time"><i class="bi bi-clock"></i> {{getTimes()}}</span>
  	</div>
  	<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
    alt="avatar 1" style="width: 45px; height: 100%;">
</div>	
</template>
<script>
import {shareMethod} from '@/services/shareMethods.js'
export default {
	data(){
		return{
			

		}
	},
	methods:{
		getTimes(){
			return shareMethod.getTime()
		}
	}
}
</script>
<style type="text/css" scoped>
.bi-heart-fill,.bi-three-dots-vertical{
	color: white;
	font-size: 20px;
}
.time{
	color: #aaa;
	font-size: 15px;
}
span{
	font-size: 20px;
}
.bot-you,.bot-i{
	padding: 1rem 2rem;
	margin: 0px;
	/*margin: 1rem 2rem;*/
}
.mb-4{
	margin: 0px !important;
}
.p-3, .me-3{
	font-size: 18px;
	border-radius: 15px; 
	background-color: #36404a;
	color: white;
	padding: 8px auto;
}
.p-3{
    padding: 0.5rem 1.5rem!important;
}
</style>