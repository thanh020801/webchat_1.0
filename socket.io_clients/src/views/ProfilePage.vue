<template>
<div class="tasbar custom-scrollbar-css p-2" style="margin: 0px;">
    <TitleTasbarComponent title='Thông tin cá nhân'/>
    <Search/>
</div>
</template>
<script>
import shareMethods from '@/services/shareMethods.js'
import TitleTasbarComponent from '@/components/TitleTasbarComponent.vue'
import Search from '@/components/SearchComponent.vue'

	export default {
    data(){
        return{
        }
    },
    components:{
    	TitleTasbarComponent,
        Search,
    },  
    methods:{
    }
}
</script>
<style scoped type="text/css">
/*.bi-person-plus-fill{
    font-size: 25px;
}
.col-2, .massage{
  font-size: 14px;
}
.name{
  font-size: 17px;
}
.row{
    margin: 1rem auto;
}
.title{
    border-bottom: 1px solid #36404a;
    background-color: rgb(48, 56, 65);
    color:#7269ef;
    padding: 0.5rem 2rem;
    margin: 0px;
}*/
/*.search{
    padding-bottom: 1rem;
    border-bottom: 1px solid #36404a;
}*/
.list_friend{
    border-bottom: 1px solid #353b48;
    height: 65px;
}

.tasbar{
	background-color: rgb(48, 56, 65);
	/*position: fixed;*/
	height: 120vh;
	padding: 0.6rem 1.6rem;
	color: white;
    position: relative;
}

.searchbar{
    margin-bottom: auto;
    margin-top: 1rem;
    height: 50px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
}

/*.search_input{
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
    height: 30px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    text-decoration:none;   
}*/



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
}	

</style>