<template>
	<div class="container-fluid">
		<div class="row">
				<Menu/>
			<div class="col-lg-3">
				<router-view />
			</div>
			<div class="col">
				<HeaderComponent />
				<FrameMessegerComponent />
			</div>
		</div>
	</div>
</template>
<script>
	import HeaderComponent from '@/components/HeaderComponent.vue';
	import Tasbar from '@/components/TasbarCPN.vue';
	import Menu from '@/components/MenuComponent.vue';
	import FrameMessegerComponent from '@/components/FrameMessegerComponent.vue';

	export default {

		components:{
			HeaderComponent,
			Tasbar,
			FrameMessegerComponent,
			Menu,
		}
	}
</script>
<style type="text/css" scoped>
.container-fluid,.col{
	min-height: 100vh;
}
.row{
	/*position: fixed;*/
	
}
.col-lg-3,.col{
	padding: 0px;
}
</style>