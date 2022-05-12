<template>
	<div class="home">
		<h1 class="text-red-500 text-3xl font-bold underline">Hello world!</h1>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'HomeView',
	components: {
		HelloWorld
	}
};
</script>
