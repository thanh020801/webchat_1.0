<template>
<div class="tasbar custom-scrollbar-css p-2" style="margin: 0px;">
    <TitleTasbarComponent title='Tin Nhắn'/>
    <Search/>
    <div v-for='i in friend.list' class="friend">
        <Friend :item='i' />
    </div>
</div>
</template>
<script>
import { userStore,messagesStore,friendStore,roomStore } from "@/stores/sendStore.js"
import TitleTasbarComponent from '@/components/TitleTasbarComponent.vue'
import Search from '@/components/SearchComponent.vue'
import Friend from '@/components/FriendComponent.vue'

export default {
    setup(){
        const user = userStore()
        const messages = messagesStore()
        const friend = friendStore()
        const room = roomStore()
        return {user,messages,friend,room}
    },
    components:{
        TitleTasbarComponent,
        Search,
        Friend,
    },  
}
</script>
<style scoped type="text/css">
    @import "../assets/CSS/tasbar.css";
    .friend:hover{
        background-color: #353b48;
    }
</style>