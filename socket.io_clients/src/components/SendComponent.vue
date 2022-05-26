<template>



<div class="d-flex flex-row justify-content-start mb-4 bot-i">
  	<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
    	alt="avatar 1" style="width: 45px; height: 100%;">
  	<div class="p-3 ms-3" style="border-radius: 15px;">
    	<p class="small mb-0">{{content.message}}</p>
    	<span class="time"><i class="bi bi-clock"></i> {{content.time}}</span>
  	</div>
  	<!-- <div><i class="bi bi-three-dots-vertical"></i></div><br/> -->

<div class="dropdown">

  	<i class="bi bi-three-dots-vertical dropdown-toggle" id="" data-bs-toggle="dropdown"></i>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style=' margin: 0px; padding: 0px;'>
    <li><a class="dropdown-item" href="#">Reply</a></li>
    <li><a class="dropdown-item" href="#">Edit</a></li>
    <li><a class="dropdown-item" href="#">Delete</a></li>
  </ul>
</div>







  	<div v-if='content.like'><i class="bi bi-heart-fill" @click='updateLike(content.like)'></i></div>
  	<div v-if='!content.like'><i class="bi bi-heart" @click='updateLike(content.like)'></i></div>
</div>
</template>
<script>
import {sendStore} from '@/stores/sendStore.js'
import shareMethods from '@/services/shareMethods.js'
export default {
	data(){
		return{
			items: this.item
		}
	},
	setup(){
		const send = sendStore()
		return{send}
	},
	props: ['content'],
	methods:{
		getTimes(){
			console.log(this.content)
			return this.content
		},
		updateLike(like){
			this.content.like = !this.content.like
		},
	}
}
</script>

<style type="text/css" scoped>
.dropdown-toggle{
	margin: 0px;
}
.dropdown-toggle::after{
	content: none;
}
.bi-heart-fill,.bi-three-dots-vertical,.bi-heart{
	color: white;
	font-size: 20px;
}
.bi-heart-fill{
	color: red;
}
.bi-heart{
	color: red;
}
.time{
	color: #ddd;
	font-size: 15px;
}
span{
	font-size: 20px;
}
.bot-you,.bot-i{
	
	padding: 1rem 2rem;
	/*margin: 1rem 2rem;*/
}
.mb-4{
	margin: 0px !important;
}
.ms-3{
	background-color: #7269EF;
}
.p-3, .me-3{
	font-size: 22px;
	border-radius: 15px; 
	background-color:#7269EF;
	color: white;

}
.p-3{
    padding: 0.5rem 1.5rem!important;
}
</style>