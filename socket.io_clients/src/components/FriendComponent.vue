<template>
<div class="list_friend " v-for='item in friend.list'>
    <div class="row">
        <div class="col-2">
            <img 
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
                class="rounded-circle" 
                style="width: 40px;"
                alt="Avatar"
            />
        </div>
        <div class="col">
            <div class="name">{{item.name}}</div>
            <div class="name" v-if='item.isOnline'>vừa mới truy cập</div>
        </div>
        <div class="col-2">
            {{getTimes()}}
        </div>
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
    setup(){
        const user = userStore()
        const messages = messagesStore()
        const friend = friendStore()
        const room = roomStore()
        return {user,messages,friend,room}
    },
    methods:{
        getTimes(){
            const time = new Date()
            return time.getHours() +":"+ time.getMinutes()

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