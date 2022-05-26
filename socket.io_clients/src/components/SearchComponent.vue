<template>
<div class="search ">
	<div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search...">
          <a href="#" class="search_icon"><i class="bi bi-search"></i></a>
    </div>
</div>
</template>
<script>
export default {}
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