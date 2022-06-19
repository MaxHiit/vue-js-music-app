<script>
import Navbar from '@/components/Navbar.vue';
import Topbar from '@/components/TopBar.vue';
export default {
	components: {
		Navbar,
		Topbar
	}
};
</script>
<template>
	<div class="root__container">
		<Navbar />
		<div class="root__main">
			<Topbar />
			<router-view />
		</div>
	</div>
</template>

<style>
.root__container {
	display: grid;
	grid-template-areas:
		'navbar__view 	main__view'
		'player__view player__view';
	grid-template-columns: auto 1fr;
	grid-template-rows: 1fr auto;
	height: 100%;
	min-height: 100%;
}

.root__main {
	grid-area: main__view;
	width: 100%;
	padding: 0 2em;
	overflow-x: hidden;
}
</style>
