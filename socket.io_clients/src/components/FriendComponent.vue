<template>
<div class="list_friend " v-for='index in 55'>
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
            <div class="name">Nguyễn Thanh</div>
            <div class="massage">Hi</div>
        </div>
        <div class="col-2">
            <!-- {{getTimes()}} -->
        </div>
    </div>
</div>
</template>
<script type="text/javascript">
export default {}
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