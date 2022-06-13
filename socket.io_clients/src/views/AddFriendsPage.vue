<template>
<div class="tasbar custom-scrollbar-css p-2" style="margin: 0px;">
    <TitleTasbarComponent title='Kết Bạn'/>
    <Search/>
    <!-- helo{{friend.search}} -->
    <div v-if='friend.search.people'>
        <AddFriend :item='friend.search' />
    </div>
    <div v-else>Không tìm thấy</div>
</div>
</template>
<script>
import realtime from '@/services/realTime.js'
import { userStore,messagesStore,friendStore,roomStore } from "@/stores/sendStore.js"
import TitleTasbarComponent from '@/components/TitleTasbarComponent.vue'
import Search from '@/components/SearchComponent.vue'
import Friend from '@/components/FriendComponent.vue'
import AddFriend from '@/components/AddFriendComponent.vue'

	export default {
    data(){
        return{
            friends: this.friend.list,
        }
    },
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
        AddFriend,
    },  
    methods:{

    }
}
</script>
<style scoped type="text/css">
@import "../assets/CSS/tasbar.css";

</style>