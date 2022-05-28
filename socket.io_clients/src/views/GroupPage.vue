<template>
<div class="tasbar custom-scrollbar-css p-2" style="margin: 0px;">
    <TitleTasbarComponent title='Nhóm'/>
    <Search/>
    <Friend/>
</div>
</template>
<script>
import { shareMethod } from '@/services/shareMethods.js'
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
        Friend,
    },  
    methods:{

    }
}
</script>
<style scoped type="text/css">
	@import "../assets/CSS/tasbar.css";
</style>