<template>
	<div class="card w-[200px]">
		<div class="card__img__wrapper h-40 rounded-2xl">
			<img :src="playlist.coverUrl" alt="" class="rounded-2xl card__img" />
		</div>
		<p class="card__title">{{ playlist.title }}</p>
		<p class="card__songs-list opacity-60">173 songs</p>
	</div>
</template>

<script>
export default {
	name: 'card',
	props: ['playlist']
};
</script>

<style></style>
