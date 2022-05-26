<template>
<div class="menu">
	<ul>
		<li v-if='user.profile === null'>
			<router-link to='/login' ><i class="bi bi-person"></i></router-link>
		</li>
		<li v-else>
				<div class="dropdown">
					<img 
		                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
		                class="rounded-circle dropdown-toggle" 
		                data-bs-toggle="dropdown"
		                style="width: 45px;"
		                alt="Avatar"
	            	/>
				  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style=' margin: 0px; padding: 0px;'>
				    <li><router-link class="dropdown-item" to='/profile'>Profile</router-link></li>
				    <li><router-link class="dropdown-item" to='/login'>Logout</router-link></li>
				  </ul>
				</div>
		</li>
		<li><router-link to='/chats'><i class="bi bi-chat-left-text"></i></router-link></li>
		<li><router-link to='/friend'><i class="bi bi-person-lines-fill"></i></router-link></li>
		<li><router-link to='/group'><i class="bi bi-people-fill"></i></router-link></li>
		<li><router-link to='/profile'><i class="bi bi-gear"></i></router-link></li>
		<li><i class="bi bi-brightness-high"></i></li>
	</ul>
</div>
</template>
<script>
import { userStore,friendStore } from '@/stores/sendStore.js'
export default {
	setup(){
		const user = userStore()
		return {user}
	}
}
</script>
<style scoped>
.menu{

	text-decoration: none;
	background-color:  #36404a;
	max-height: 120vh;
	width: 70px;
	/*position: fixed;	*/
	position: relative;
}
i{
	font-size: 30px;
	color:#7269ef;
}

ul{
	margin: 0px;
	padding: 0px;
	text-align: center;
}
li{
	width: 100%;
	list-style-type: none;
	margin: 1rem auto;
}
li:hover,i:hover{
	color: white;
	background-color:  #243343;
}
</style>