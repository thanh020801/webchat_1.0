<template>
<div class="tasbar custom-scrollbar-css p-2" style="margin: 0px;">
    <TitleTasbarComponent title='Bạn bè'/>
    <Search/>
    <Friend/>
</div>
</template>
<script>
import shareMethods from '@/services/shareMethods.js'
import TitleTasbarComponent from '@/components/TitleTasbarComponent.vue'
import Search from '@/components/SearchComponent.vue'
import Friend from '@/components/FriendComponent.vue'

	export default {
    data(){
        return{
        }
    },
    components:{
    	TitleTasbarComponent,
        Search,
        Friend
    },  
    methods:{

    }
}
</script>
<style scoped type="text/css">
@import "../assets/CSS/tasbar.css";
/*.tasbar{
	background-color: rgb(48, 56, 65);
	height: 120vh;
	padding: 0.6rem 1.6rem;
	color: white;
    position: relative;
}

.my-custom-scrollbar {
  position: relative;
  overflow: auto;
}

.scrollbar {
  overflow-y: scroll;
}
.force-overflow {
  min-height: 450px;
}

.scrollbar-primary::-webkit-scrollbar {
  width: 12px;
}

.scrollbar-primary::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #4285F4;
}

.custom-scrollbar-css {
  overflow-y: scroll;
}

.custom-scrollbar-css::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar-css::-webkit-scrollbar-track {
  background:  #36404a;
}

.custom-scrollbar-css::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;
  background-image: linear-gradient(to top, #00d2ff 0%, #3a7bd5 100%);
}	*/

</style>