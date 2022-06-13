<template>
    <div v-if='!item'>nooooo</div>
    <div v-else class="row">
        <div class="col-2">
            <img 
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
                class="rounded-circle" 
                style="width: 40px;"
                alt="Avatar"
            />
        </div>
        <div class="col">
            <div class="name">{{item.people.phone}}</div>
        </div>
        <div class="col-2">
            <div v-if='!item.isFriend' @click='addFriend()'>add</div>
        </div>
    </div>
</template>
<script >
import realtime from '@/services/realTime.js'
import { userStore,messagesStore,friendStore,roomStore } from "@/stores/sendStore.js"
export default {
    data(){
        return {
            socketInstance: realtime(),
        }
    },
    // AddFriendPage
    props:['item'],
    setup(){
        const user = userStore()
        const messages = messagesStore()
        const friend = friendStore()
        const room = roomStore()
        return {user,messages,friend,room}
    },
    mounted(){
        this.socketInstance.on('INVITE-STATUS', (data)=>{
            console.log('Đã gửi lời mời đến ',this.item.people.phone)
        })
    },
    methods:{
        getTimes(){
            const time = new Date()
            return time.getHours() +":"+ time.getMinutes()

        },
        addFriend(){
            console.log(this.user.profile)
            this.socketInstance.emit('INVITE-ADDFRIEND',{user:this.user.profile,phoneInvited: this.item.people.phone})
        }

    }
}
</script>
<style type="text/css" scoped>
.list_friend{
    border-bottom: 1px solid #353b48;
    height: 65px;
}
.name{
  font-size: 17px;
}
.row{
    margin: 1rem auto;
}

.col-2, .massage{
  font-size: 14px;
}
</style>