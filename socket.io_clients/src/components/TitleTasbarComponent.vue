<template>
    <div class="title">
        <div class="row">
	        <div class="col"><h3>{{title}}</h3></div>
            <div class="col-1">
                <router-link to='/add-friend'>
                    <i class="bi bi-person-plus-fill"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:['title'],
}
</script>
<style type="text/css" scoped>
.bi-person-plus-fill{
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
}
</style>