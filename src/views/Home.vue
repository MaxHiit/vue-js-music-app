<template>
	<div class="home">
		<section class="pt-2">
			<Title>Top Artists - top 50</Title>
			<div class="flex gap-8">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	</div>
</template>

<script>
import Title from '@/components/TitleSection.vue';
import Card from '@/components/Card.vue';

export default {
	name: 'HomeView',
	components: {
		Title,
		Card
	}
};
</script>
