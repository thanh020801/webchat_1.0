<template>
<div class="frame">
  <div class="custom-scrollbar-css p-2" v-if='sendList.messages !== null'>
      <div class="content-message" v-for='(item, index) in sendList.messages'>
        <SendComponent :content='item'/>
        <!-- <ReceiveComponent/> -->

    </div> 
  </div>
  <InputMessageComponent @handelMessage='getMessage'/>
</div>

</template>
<script>
  // import {sendStore} from '@/stores/sendStore.js'
	import ReceiveComponent from '@/components/ReceiveComponent.vue'
	import SendComponent from '@/components/SendComponent.vue'
  import InputMessageComponent from '@/components/InputMessageComponent.vue'
	export default {
    data(){
      return{
        send:{
          message: "",
          time: "",
          like: false,
        },
        sendList:{
          messages: [],
        }

      }
    },
    setup(){
      // const sendList = sendStore()
      // return {sendList}
    },
    methods:{
      getMessage(e){
        this.send.message = e
        // console.log(e)
        this.sendList.messages.push(e)
      }
    },
		components:{
			ReceiveComponent,
			SendComponent,
      InputMessageComponent,
		}
	}
</script>
<style scoped>
.custom-scrollbar-js,
.custom-scrollbar-css {
  height:75vh;
}


/* Custom Scrollbar using CSS */
.custom-scrollbar-css {
  overflow-y: scroll;
}

/* scrollbar width */
.custom-scrollbar-css::-webkit-scrollbar {
  width: 5px;
}

/* scrollbar track */
.custom-scrollbar-css::-webkit-scrollbar-track {
  background:  #36404a;
}

/* scrollbar handle */
.custom-scrollbar-css::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: #00d2ff;
  background-image: linear-gradient(to top, #00d2ff 0%, #3a7bd5 100%);
}

body {
  min-height: 120vh;
  background-color: #00d2ff;
  background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 100%);
}




.frame{
	position: relative;
  background-color: #262e35;
  padding: 0px;
  min-height: 100vh;
}
.scrollbar {
  margin-left: 30px;
  overflow-y: auto;
  margin-bottom: 25px;
}
</style>