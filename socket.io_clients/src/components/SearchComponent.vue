<template>
<div class="search ">
	<div class="searchbar">
          <input class="search_input" type="text" v-model='keySearch' placeholder="Search...">
          <button class="search_icon" @click='searchFriend()'><i class="bi bi-search"></i></button>
    </div>
</div>
</template>
<script>
import { userStore,messagesStore,friendStore,roomStore } from "@/stores/sendStore.js"
import realtime from '@/services/realTime.js'
export default {
    data(){
        return{
            socketInstance: realtime(),
            keySearch: ""
        }
    },
    setup(){
      const user = userStore()
      const messages = messagesStore()
      const friend = friendStore()
      const room = roomStore()
      return {user,messages,friend,room}
    },
    mounted(){
        this.socketInstance.on('SEARCH-STATUS',data=>{
            if(data.success){
                this.friend.search.people = data.search
                this.friend.search.isFriend = data.isFriend
                // console.log(data.isFriend)
                // console.log(this.friend.search)
            }else{
                this.friend.search.people = null
                this.friend.search.isFriend = false
            }
        })
    },
    methods:{
        searchFriend(){
            if(this.keySearch){
                this.socketInstance.emit("SEARCH",this.keySearch)
                this.keySearch = ""
            }else{
                alert("Yeu cau nhap truoc khi tim kiem")
            }
        },
    }
}
</script>
<style type="text/css" scoped>
.search{
    padding-bottom: 1rem;
    border-bottom: 1px solid #36404a;
}

.searchbar{
    margin-bottom: auto;
    margin-top: 1rem;
    height: 50px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
}

.search_input{
    color: white;
    border: 0;
    outline: 0;
    background: #353b48;
    width: 80%;
    caret-color:white;
    line-height: 30px;
    z-index: 100;
    font-size: 20px;
}

.searchbar:hover > .search_icon{
    background: #36404a;
}

.search_icon{
    background: #353b48;
    border: none;
    height: 30px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    text-decoration:none;
}
</style>